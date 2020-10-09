let delta = null

unitInitIds()

overrideUnitPoints()

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
            return adjustedPrices[text]
        })
        .forEach(choise => {
            let text = pointsRegexp.exec(choise.innerHTML)[1]
            let points = adjustedPrices[text];
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

function initStoredDelta() {
    let radioBtn = document.querySelector('input[id="Choice"][checked="checked"][type="radio"]')
    if(radioBtn) {initStoredDelta
        let deltaNode = radioBtn.parentNode.parentNode.querySelector('p[class="points-delta"]')
        delta = deltaNode ? parseInt(deltaNode.textContent) : 0
    }
}

function setupSumbissionListeners() {
    let saveBtn = document.querySelector('button[id="btnSave"]')
    saveBtn.addEventListener("click", function (e) {
        storeDelta(armyId, formationId, unitId, delta)
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
            delta = deltaNode ? deltaNode.textContent : 0
        }
    })
}

