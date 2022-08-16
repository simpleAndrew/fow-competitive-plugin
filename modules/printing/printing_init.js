printInitIds()

fixTheBrokenCards()

if (isFormationSupported(formationId)) {
    let armyDivs = document.querySelectorAll('div[class="cssReport"] div')

    armyDivs.forEach(currentDiv => {
        if (isFormationDiv(currentDiv)) {
            overrideUnitPoints()
            overrideFormation()
            log("Next Formation starting")
            currentFormation = currentDiv
            currentFormationName = currentDiv.firstElementChild.textContent
            logStatLine()
        } else if (isUnitDiv(currentDiv)) {
            overrideUnitPoints()
            log("Next Unit starting")
            currentUnit = currentDiv
            currentUnitName = currentDiv.firstElementChild.textContent
            logStatLine()
        } else if (isUnitOptionDiv(currentDiv)) {
            log("Next Unit Option starting")
            overrideOptionPoints(currentDiv)
        } else if (isUnitAddonDiv(currentDiv)) {
            log("Next Unit Addon starting")
            overrideAddOnPoints(currentDiv)
        } else if (isArmyDiv(currentDiv)) {
            overrideUnitPoints()
            overrideFormation()
            overrideArmy(currentDiv)
        }
    })

    if(armyD !== 0) {
        let titleDiv = document.querySelector('div[class="cssTitle"]')
        titleDiv.innerHTML += "<sup>*</sup> (Competitive Points)"
    }
}