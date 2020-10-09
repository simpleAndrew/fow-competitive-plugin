let delta = null

unitInitIds()

overrideUnitPoints()
overrideUnitOptionPoints()

chrome.storage.local.get(armyId, function (storedArmyPoints) {
    if (storedArmyPoints) {
        armyPoints = storedArmyPoints
        let nodes = document.querySelectorAll('div[class="cssPtLine"] div')
        overrideUnitCost(nodes[1])
        overrideFormationPoints(nodes[2])
        overrideArmyPoints(nodes[3])
    }
})

initStoredDelta()

setupSelectionChangeListeners()
setupSumbissionListeners()

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
            let newCost = document.createElement('p');
            newCost.textContent = delta;
            newCost.setAttribute("class", "points-delta")
            newCost.setAttribute("style", "display: none")
            choise.appendChild(newCost);
        })
}

function overrideUnitOptionPoints() {
    let pointsRegexp = /.+(([\+-]\d+) points?).*/
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
            div.parentNode.replaceChild(newDescription, div)
        }
    })
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
        ).forEach( dlt => finalSum += dlt)

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
    saveBtn.addEventListener("click", function (e) {
        let extraD = calculateOptionsDelta()
        storeDelta(armyId, formationId, unitId, delta + extraD)
    })

    let clearBtn = document.querySelector('button[id="btnClear"]')
    clearBtn.addEventListener("click", function () {
        clearUnitDelta(armyId, formationId, unitId)
    })
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



