let currentFormation = null
let currentFormationName = null
let currentUnitDiv = null
let currentUnitName = null
let currentUnitCard = null
let currentFormationDelta = 0
let currentUnitDelta = 0
let currentCustomAddonPoints = 0
let armyD = 0

const totalSelectedNumberRegex = /.*Total cards:\n&nbsp;\((\d+) selected\)/
const pointlessSelectedNumberRegex = /^(.+?)\n&nbsp;\((\d+) selected.*?$/
const addonWithPointCostBuildInRegex = /^(.+(([+-]\d+) points?).+?)(\n&nbsp;\((\d+) selected\).*)?$/

function fixTheBrokenCards() {
    const fixes = {
        "Command Card Captured 6 pdr Anti-tank (with 3 guns)": -3,
        "Command Card Captured 6 pdr Anti-tank (with 2 guns)": -2
    }
    document.querySelectorAll('div[class="cssO"] div[class="cssOpt"]')
        .filter(div => fixes[div.innerText.trim()])
        .forEach(div => {
            let optName = div.innerText.trim()
            div.setAttribute("class", "cssOptL")
            let points = document.createElement('div');
            points.setAttribute("class", "cssCP")
            points.innerText = fixes[optName]
            div.parentNode.appendChild(points)
        })
}

function customiseAdjustedCards() {
    document.querySelectorAll('div[class="cssReport"] div[class="cssUnit"]').forEach(unitDiv => {
        const unitName = unitDiv.innerText
        const complexOptions = getPotentialComplexOptions(unitName)
        const unitContainerDiv = unitDiv.parentNode
        const reportDiv = unitContainerDiv.parentNode

        //add card cost field
        const overriddenOptions = getOverriddenCards(unitName)
        let optionDiv = unitContainerDiv.nextElementSibling.children[0]
        let cardOptionText = optionDiv.innerText

        //if this is actually originally pointless option that receives custom point values
        if (optionDiv.className === "cssOpt" && overriddenOptions.indexOf(cardOptionText.trim()) !== -1) {
            optionDiv.className = "cssOptL"
            let ptsValue = unitDiv.nextElementSibling.nextElementSibling.innerHTML
            let ptsContainer = document.createElement("div")
            ptsContainer.innerHTML = ptsValue
            ptsContainer.className = "cssCP"
            optionDiv.parentNode.appendChild(ptsContainer)
        }

        //print custom options
        for (let customOption in complexOptions) {
            let customOptionDiv = document.createElement("div")
            let selectedValue = getCustomOptionValue(armyId, customOption)
            customOptionDiv.className = "cssO"
            let optionCost = selectedValue * complexOptions[customOption]
            customOptionDiv.innerHTML = `<div class="cssOpt custom-points" delta="${optionCost}" id="${customOption}">\n${customOption}\n&nbsp;(${selectedValue} selected) \n</div>`
            reportDiv.insertBefore(customOptionDiv, optionDiv.parentNode.nextSibling)
        }
    })
}

function logStatLine() {
    log(`Formation:${currentFormationName}; Unit:${currentUnitName}; Card:${currentUnitCard};\n
        Deltas: Army[${armyD}], Formation[${currentFormationDelta}], Unit[${currentUnitDelta}], Custom[${currentCustomAddonPoints}]`)
}

function isArmyDiv(div) {
    return div.className === "cssTotal";
}

function isFormationDiv(div) {
    return div.querySelector('div[class="cssFrm"]');
}

function isUnitDiv(div) {
    return div.querySelector('div[class="cssUnit"]');
}

function isUnitOptionDiv(div) {
    return (div.children[0] || {}).className === "cssOptL";
}

function isUnitAddonDiv(div) {
    return (div.children[0] || {}).className === "cssOpt";
}

function isCustomAddonDiv(div) {
    return (div.children[0] || {}).className === "cssOpt custom-points"
}

function overrideOptionPoints(divContainer) {
    let unitNames = divContainer.querySelectorAll('div[class="cssOptL"]');

    unitNames.filter(choise => {
        return getPointsWithFormationName(choise.innerHTML, currentUnitName, currentUnitCard, currentFormationName)
    })
        .forEach(choice => {
            let points = getPointsWithFormationName(choice.innerHTML, currentUnitName, currentUnitCard, currentFormationName);
            let pointsContainer = choice.parentElement.querySelector('div[class="cssCP"]')
            let originalPoints = parseInt(pointsContainer.textContent)
            pointsContainer.innerHTML = points + "<sup>*</sup>"
            pointsContainer.setAttribute("title", originalPoints + " by default")
            currentUnitDelta += points - originalPoints
            log(`Points: original[${originalPoints}]; adjusted[${points}]; delta[${points - originalPoints}]`)
            logStatLine()
        })
}

function overrideAddOnPoints(divContainer) {
    let container = divContainer.firstElementChild
    let originalHtml = container.innerHTML

    let factorParts = totalSelectedNumberRegex.exec(originalHtml)
    if (factorParts) {
        let unitFactor = parseInt(factorParts[1])
        currentUnitDelta *= unitFactor
        return
    }

    let parsed = pointlessSelectedNumberRegex.exec(originalHtml.trim()) || [];
    let optionText = parsed[1]
    let selected = parsed[2]
    log(`Weird option override: ${optionText} -> selected ${selected}`)
    if (selected) {
        let delta = getAdjustedOptionPoints(optionText)
        log(`Given delta: ${delta}`)
        if(delta !== undefined) {
            currentUnitDelta += delta * parseInt(selected)
            container.innerHTML = `${originalHtml} ( ${writeAsPoints(delta)} each)`
        }
        return
    }


    let parts = addonWithPointCostBuildInRegex.exec(originalHtml.trim())
    if (parts) {
        let optionText = parts[1]

        let adjustedOptionPoints = getAdjustedOptionPoints(optionText);

        log(`Adjusted addon: ${optionText}; adjusted point cost: ${adjustedOptionPoints}`)
        if (adjustedOptionPoints !== undefined && adjustedOptionPoints !== 0) {
            let pointsText = parts[2]
            let pointsVal = parts[3]
            log(`Addon original points: ${pointsVal}`)

            let priceDelta = adjustedOptionPoints - parseInt(pointsVal)

            log(`Addon points delta: ${priceDelta}`)

            let newPointsText = writeAsPoints(adjustedOptionPoints)

            container.innerHTML = originalHtml.replace(pointsText, newPointsText)
            container.setAttribute("title", `${pointsText} by default`)

            let factor = parts[5] ? parseInt(parts[5]) : 1

            log(`Addons selected count: ${factor}`)

            currentUnitDelta += priceDelta * factor
            logStatLine()
        }
    }
}

function handleCustomAddonPoints(divContainer) {
    let container = divContainer.children[0]
    let customPointsDelta = parseInt(container.attributes.getNamedItem("delta").value);
    log(`Adding ${customPointsDelta} for option ${container.id}`)
    currentCustomAddonPoints += customPointsDelta
    logStatLine()
}

function overrideUnitPoints() {
    if (currentUnitDiv && (currentUnitDelta + currentCustomAddonPoints) !== 0) {
        let pointsDiv = currentUnitDiv.querySelector('div[class="cssUPts"]')
        let originalPoints = parseInt(pointsDiv.textContent)
        pointsDiv.innerHTML = (originalPoints + currentUnitDelta + currentCustomAddonPoints) + "<sup>*</sup>"
        pointsDiv.setAttribute("title", `${originalPoints} by default`)
        log(`Original Unit Points: ${originalPoints}`)
    } else if (currentUnitDiv) {
        log("Unit handling done")
        logStatLine()
    }
    currentFormationDelta += currentUnitDelta + currentCustomAddonPoints
    currentUnitDelta = 0
    currentCustomAddonPoints = 0
    currentUnitDiv = null
    currentUnitName = null
    currentUnitCard = null
}

function overrideFormation() {
    if (currentFormation && currentFormationDelta !== 0) {
        let pointsDiv = currentFormation.querySelector('div[class="cssPts"]')
        let originalPoints = parseInt(pointsDiv.textContent)
        pointsDiv.innerHTML = (originalPoints + currentFormationDelta) + "<sup>*</sup>"
        pointsDiv.setAttribute("title", `${originalPoints} by default`)
        log(`Original Formation Points: ${originalPoints}`)
    } else if (currentFormation) {
        log("Formation handling done")
        logStatLine()
    }
    armyD += currentFormationDelta
    currentFormationDelta = 0
    currentFormation = null
    currentFormationName = null
}

function overrideArmy(div) {
    if (armyDelta !== 0) {
        let pointsDiv = div.lastChild
        let originalPoints = parseInt(pointsDiv.textContent.split(":")[1])
        pointsDiv.innerHTML = `Total Points: ${originalPoints + armyD}<sup>*</sup>`
        pointsDiv.setAttribute("title", `${originalPoints} by default`)
        log(`Original Army Points: ${originalPoints}`)
        log("Army handling done")
        logStatLine()
    }
}
