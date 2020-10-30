printInitIds()


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

fixTheBrokenCards()

let currentFormation = null
let currentFormationName = null
let currentUnit = null
let currentUnitName = null
let currentFormationDelta = 0
let currentUnitDelta = 0
let armyD = 0

function isFormationDiv(div) {
    return div.querySelector('div[class="cssFrm"');
}

function isUnitDiv(div) {
    return div.querySelector('div[class="cssUnit"');
}

function isUnitOptionDiv(div) {
    return (div.children[0] || {}).className === "cssOptL";
}

function isUnitAddonDiv(div) {
    return (div.children[0] || {}).className === "cssOpt";
}

function isArmyDiv(div) {
    return div.className === "cssTotal";
}

function overrideOptionPoints(divContainer) {
    let unitNames = divContainer.querySelectorAll('div[class="cssOptL"]');

    unitNames.filter(choise => {
        return getPointsWithFormationName(choise.innerHTML, currentUnitName, currentFormationName)
    })
        .forEach(choise => {
            let points = getPointsWithFormationName(choise.innerHTML, currentUnitName, currentFormationName);
            let pointsContainer = choise.parentElement.querySelector('div[class="cssCP"]')
            let originalPoints = parseInt(pointsContainer.textContent)
            pointsContainer.innerHTML = points + "<sup>*</sup>"
            currentUnitDelta += points - originalPoints
        })
}

function overrideAddOnPoints(divContainer) {
    let container = divContainer.firstElementChild

    let addOnRegexp = /(.+(([+-]\d+) points?).+)(\n&nbsp;\((\d+) selected\).*)?/
    let originalHtml = container.innerHTML
    let parts = addOnRegexp.exec(container.textContent.trim())

    if (!parts) {
        let cardsSelectedRegexp = /.*Total cards:\n&nbsp;\((\d+) selected\)/
        let factorParts = cardsSelectedRegexp.exec(originalHtml)
        if (factorParts) {
            let unitFactor = parseInt(factorParts[1])
            currentUnitDelta *= unitFactor
        }
        return
    }

    let optionText = parts[1]

    let adjustedOptionPoints = getAdjustedOptionPoints(optionText);
    if (adjustedOptionPoints !== undefined && adjustedOptionPoints !== 0) {
        let pointsText = parts[2]
        let pointsVal = parts[3]
        let priceDelta = adjustedOptionPoints - parseInt(pointsVal)
        let newPointsText = (adjustedOptionPoints > 0 ? "+" : "")
            + adjustedOptionPoints + "<sup>*</sup> point"
            + ((adjustedOptionPoints === 1 || adjustedOptionPoints === -1) ? "" : "s")

        container.innerHTML = originalHtml.replace(pointsText, newPointsText)

        let factor = parts[5] ? parseInt(parts[5]) : 1
        currentUnitDelta += priceDelta * factor
    }
}

function overrideUnitPoints() {
    if (currentUnit && currentUnitDelta !== 0) {
        let pointsDiv = currentUnit.querySelector('div[class="cssUPts"')
        let originalPoints = parseInt(pointsDiv.textContent)
        pointsDiv.innerHTML = (originalPoints + currentUnitDelta) + "<sup>*</sup>"
    }
    currentFormationDelta += currentUnitDelta
    currentUnitDelta = 0
    currentUnit = null
    currentUnitName = null
}

function overrideFormation() {
    if (currentFormation && currentFormationDelta !== 0) {
        let pointsDiv = currentFormation.querySelector('div[class="cssPts"')
        let originalPoints = parseInt(pointsDiv.textContent)
        pointsDiv.innerHTML = (originalPoints + currentFormationDelta) + "<sup>*</sup>"
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
        pointsDiv.innerHTML = "Total Points:" + (originalPoints + armyD) + "<sup>*</sup>"
    }
}


if (isFormationSupported(formationId)) {
    let armyDivs = document.querySelectorAll('div[class="cssReport"] div')

    armyDivs.forEach(currentDiv => {
        if (isFormationDiv(currentDiv)) {
            overrideUnitPoints()
            overrideFormation()
            currentFormation = currentDiv
            currentFormationName = currentDiv.firstElementChild.textContent
        } else if (isUnitDiv(currentDiv)) {
            overrideUnitPoints()
            currentUnit = currentDiv
            currentUnitName = currentDiv.firstElementChild.textContent
        } else if (isUnitOptionDiv(currentDiv)) {
            overrideOptionPoints(currentDiv)
        } else if (isUnitAddonDiv(currentDiv)) {
            overrideAddOnPoints(currentDiv)
        } else if (isArmyDiv(currentDiv)) {
            overrideUnitPoints()
            overrideFormation()
            overrideArmy(currentDiv)
        }
    })
}