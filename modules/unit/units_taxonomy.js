let delta = null

function overrideUnitPoints() {
    let choises = document.querySelectorAll('div[class="Choices"]');

    let pointsRegexp = /(.+)<div.* POINTS.*/
    choises.map(element => {
        return element.querySelector('div[class="OChoice"]')
    })
        .filter(choise => {
            let text = pointsRegexp.exec(choise.innerHTML)[1]
            return getPoints(text)
        })
        .forEach(choise => {
            let text = pointsRegexp.exec(choise.innerHTML)[1]
            let points = getPoints(text);
            let originalPoints = choise.lastElementChild.textContent.split(" POINT")[0]
            let delta = points - originalPoints
            choise.lastElementChild.innerHTML = points + "<sup>*</sup>" + " POINTS"
            choise.lastElementChild.setAttribute("title", originalPoints + " by default")
            let newCost = document.createElement('p');
            newCost.textContent = delta;
            newCost.setAttribute("class", "points-delta")
            newCost.setAttribute("style", "display: none")
            choise.appendChild(newCost);
        })
}

function overrideUnitOptionPoints() {
    let pointsRegexp = /.+(([+-]\d+) points?).*/
    let optionDivs = document.querySelectorAll('div[class="Options"]')
    optionDivs.map(div => {
        return div.childNodes[2]
    })
        .filter(textNode => {
            let originalText = textNode.textContent
            return getAdjustedOptionPoints(originalText)
        }).forEach(div => {
        let originalText = div.textContent
        let pointsParts = pointsRegexp.exec(originalText)
        let parsedPoints = pointsParts[1]
        let adjustedPrice = getAdjustedOptionPoints(originalText)

        let originalPoints = parseInt(pointsParts[2])
        let currentDelta = adjustedPrice - originalPoints

        if (currentDelta !== 0) {

            let holder = div.parentNode.querySelector('div[class="Options"] input[type="checkbox"]')
            let attr = document.createAttribute("delta")
            attr.value = currentDelta
            holder.attributes.setNamedItem(attr)

            let newPointsText = (adjustedPrice > 0 ? "+" : "")
                + adjustedPrice + "<sup>*</sup> point"
                + ((adjustedPrice === 1 || adjustedPrice === -1) ? "" : "s")

            let adjustedText = originalText.replace(parsedPoints, newPointsText)
            let newDescription = document.createElement('span');
            newDescription.innerHTML = adjustedText;
            newDescription.setAttribute("title", parsedPoints + " by default")
            div.parentNode.replaceChild(newDescription, div)
        }
    })
}

function overrideComplexCardPoints() {
    let overrides = getPotentialComplexOptions(unitName)
    if (!overrides) {
        log("Have no complex overrides")
        return;
    }

    log(unitName + " has complex overrides: " + JSON.stringify(overrides))

    let customOptionsContainer = document.createElement("div")
    customOptionsContainer.className = "Options ORaw"
    let maxOfSelectedOptions = Math.max(...document.querySelectorAll('div[class="cssQty"] select option')
        .map(opt => {
                return parseInt(opt.value)
            }
        )
    )

    let persistedOptions = getCustomOptions(armyId, formationId, unitId)

    for (elmnt in overrides) {
        let newOption = document.createElement('ul');
        let selectedOption = parseInt(persistedOptions[elmnt] || "0")
        let pointCost = overrides[elmnt]
        let txt = elmnt.replace("+0", pointCost > 0 ? "+" + pointCost : "" + pointCost)
        let selectionUnits = '<li>' + txt + '</li><div class="cssQty custom-option" name="' + elmnt + '"><select name="' + elmnt + '"  delta="' + pointCost + '">'
        const end = '<li/></select></div>'
        for (let i = 0; i <= maxOfSelectedOptions; i++) {
            let selectedBlock = i === selectedOption ? " selected " : ""
            let unitWord = i === 1 ? " unit":" units"
            selectionUnits += '<option value="' + i + '" ' + selectedBlock + '>' + i + unitWord + '</option>'
        }
        newOption.innerHTML = selectionUnits + end
        customOptionsContainer.append(newOption)
    }

    let optionsStart = document.querySelector('div[class="Options ORaw"]')
    optionsStart.parentNode.insertBefore(customOptionsContainer, optionsStart)

    log("Options are added")
}

function calculateOptionsDelta() {

    let checkedBoxes = document.querySelectorAll('div[class="Options"] input[type="checkbox"]')

    let finalSum = 0

    if (checkedBoxes)
        checkedBoxes.filter(cBox => {
            return cBox.checked && cBox.attributes.getNamedItem("delta");
        }).map(box => {
                let multiplier = box.parentNode.parentNode.querySelector("select")
                let factor = multiplier ? parseInt(multiplier.value) : 1
                let delta = parseInt(box.attributes.getNamedItem("delta").value || 0)

                return delta * factor;
            }
        ).forEach(dlt => finalSum += dlt)

    return finalSum
}

function calculateCustomOptionsDelta() {
    let finalSum = 0
    document.querySelectorAll('div[class="cssQty custom-option"] select').forEach(opt => {
        let costDelta = parseInt(opt.attributes.getNamedItem("delta").value)
        log("delta: " + costDelta)
        let multiplier = opt.selectedOptions[0].value
        log("custom option delta " + opt.name + ": " + (costDelta * multiplier))
        finalSum += costDelta * multiplier
    })
    return finalSum
}

function initStoredDelta() {
    let radioBtn = document.querySelector('input[id="Choice"][checked="checked"][type="radio"]')
    if (radioBtn) {
        let deltaNode = radioBtn.parentNode.parentNode.querySelector('p[class="points-delta"]')
        delta = deltaNode ? parseInt(deltaNode.textContent) : 0
    }
}

function setupSumbissionListeners() {
    let saveBtn = document.querySelector('button[id="btnSave"]')
    saveBtn.addEventListener("click", _ => {
        let extraD = calculateOptionsDelta() + calculateCustomOptionsDelta()
        let multiplier = detectDeltaMultiplier()
        storeCustomSelection()
        storeDelta(armyId, formationId, unitId, delta * multiplier + extraD)
    })

    let clearBtn = document.querySelector('button[id="btnClear"]')
    clearBtn.addEventListener("click", function () {
        clearUnitDelta(armyId, formationId, unitId)
    })
}

function storeCustomSelection() {
    document.querySelectorAll('div[class="cssQty custom-option"] select').forEach(opt => {
            let optionName = opt.name
            let selectedCount = opt.selectedOptions[0].value

            log("storing option  " + optionName + ": " + selectedCount)

            storeCustomOptions(armyId, formationId, unitId, {[optionName]: selectedCount})
        }
    )
}

function detectDeltaMultiplier() {
    let optionCnt = document.querySelectorAll('div[class="Options"]')
        .filter(div => div.textContent.trim().startsWith("Total cards:"))

    if (optionCnt[0]) {
        let selectedOpt = optionCnt[0].querySelector("select")
        return selectedOpt ? parseInt(selectedOpt.value) : 1
    } else {
        return 1;
    }
}

function setupSelectionChangeListeners() {
    let radioBtns = document.querySelectorAll('input[id="Choice"]')

    radioBtns.forEach(radioBtn => {
        radioBtn.onclick = function () {
            let deltaNode = radioBtn.parentNode.parentNode.querySelector('p[class="points-delta"]')
            delta = deltaNode ? parseInt(deltaNode.textContent) : 0
        }
    })
}