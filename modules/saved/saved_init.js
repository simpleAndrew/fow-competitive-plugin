initArmyPoints(_ => {
    adjustArmyPoints()
    setListeners()
})

function adjustArmyPoints() {
    log("Adjust Saved Army points")
    document.querySelectorAll(`td[class="rj"] + td > a`)
        .forEach(selectLink => {
            let armyIdRegex = /^https:\/\/.+?Index\/([\w-]+)\/(\d+)\/.*$/
            let parsedIds = armyIdRegex.exec(selectLink.href) || [];
            const armyId = parsedIds[1]
            const formationId = parsedIds[2]

            if (! isFormationSupported(formationId)) {
                log(`Formation ${formationId} is not supported in for overrides`)
                return
            }

            const delta = armyDelta(armyId)
            if (delta) {
                const pointsDiv = selectLink.parentElement.previousElementSibling
                const originalPoints = parseInt(pointsDiv.textContent)
                log(`Overriding points for ${armyId} with ${delta}. ${originalPoints} => ${originalPoints + delta}`)
                pointsDiv.innerHTML = `${originalPoints + delta} <sup>*</sup>`
            } else {
                log(`No delta found for ${armyId}, href: ${selectLink.href}`)
            }
        })
}

function setListeners() {
    log("Setup listeners")
}