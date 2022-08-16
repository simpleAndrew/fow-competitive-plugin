unitInitIds()



if (isFormationSupported(formationId)) {
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
}

