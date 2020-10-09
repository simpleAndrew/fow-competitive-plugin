unitInitIds()

let armyDivs = document.querySelectorAll('div[class="cssReport"] div')

let currentFormation = null
let currentUnit = null
let currentFormationDelta = 0
let currentUnitDelta = 0
let armyD = 0

armyDivs.forEach(currentDiv => {
    if(isFormationDiv(currentDiv)) {
        overrideUnitPoints()
        overrideFormation()
        currentFormation = currentDiv
    } else if(isUnitDiv(currentDiv)) {
        overrideUnitPoints()
        currentUnit = currentDiv
    } else if(isOptionDiv(currentDiv)) {
        overrideOptionPoints(currentDiv)
    } else if(isArmyDiv(currentDiv)) {
        overrideUnitPoints()
        overrideFormation()
        overrideArmy(currentDiv)
    }
})

function isFormationDiv(div){
    return div.querySelector('div[class="cssFrm"');
}
function isUnitDiv(div) {
    return div.querySelector('div[class="cssUnit"');
}
function isOptionDiv(div) {
    return div.className === "cssO";
}
function isArmyDiv(div) {
    return div.className === "cssTotal";
}
function overrideOptionPoints(divContainer) {
    let unitNames = divContainer.querySelectorAll('div[class="cssOptL"]');

    unitNames.filter(choise => {
            let text = choise.innerText
            return getAdjustedPoints(text)
        })
        .forEach(choise => {
            let selectionName = choise.innerText
            let points = getAdjustedPoints(selectionName);
            let pointsContainer = choise.parentElement.querySelector('div[class="cssCP"]')
            let originalPoints = parseInt(pointsContainer.textContent)
            pointsContainer.innerHTML = points + "<sup>*</sup>"
            currentUnitDelta += points - originalPoints
        })
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
}

function overrideFormation() {
    if(currentFormation && currentFormationDelta !== 0) {
        let pointsDiv = currentFormation.querySelector('div[class="cssPts"')
        let originalPoints = parseInt(pointsDiv.textContent)
        pointsDiv.innerHTML = (originalPoints + currentFormationDelta) + "<sup>*</sup>"
    }
    armyD += currentFormationDelta
    currentFormationDelta = 0
    currentFormation = null
}

function overrideArmy(div) {
    if(armyDelta !== 0) {
        let pointsDiv = div.lastChild
        let originalPoints = parseInt(pointsDiv.textContent.split(":")[1])
        pointsDiv.innerHTML = "Total Points:" + (originalPoints + armyD) + "<sup>*</sup>"
    }
}