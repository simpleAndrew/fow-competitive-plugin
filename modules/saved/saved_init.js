const selectLinkIDsExtractionRegex = /^https:\/\/.+?Index\/([\w-]+)\/(\d+)\/.*$/

const deleteLinkIDsExtractionRegex = /^https:\/\/.+?GUIDID=([\w-]+)&.+$/

initArmyPoints(_ => {
    adjustArmyPoints()
    setListeners()
})

function adjustArmyPoints() {
    log("Adjust Saved Army points")
    document.querySelectorAll(`td[class="rj"] + td > a`)
        .forEach(selectLink => {
            let parsedIds = selectLinkIDsExtractionRegex.exec(selectLink.href) || [];
            const armyId = parsedIds[1]
            const formationId = parsedIds[2]

            if (!isFormationSupported(formationId)) {
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
    document.querySelectorAll(`td[class="rj"] + td + td + td > a`)
        .forEach(deleteLink => {
            deleteLink.addEventListener("click", _ => {
                let armyId = deleteLinkIDsExtractionRegex.exec(deleteLink.href)[1]
                clearArmyDelta(armyId)
                log(`${armyId} stored points deleted`)
            })
        })
}