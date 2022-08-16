let armyPoints = {}

function overrideUnitCost(node) {
    let delta = ((armyPoints[armyId] || {})[formationId] || {})[unitId] || 0
    log("Point override for formation " + unitId + " in formation " + formationId + ": " + delta)
    let originalPoints = parseInt(node.textContent.split(":")[1])
    if (delta !== 0) {
        let currentPoints = originalPoints + delta
        node.innerHTML = "Unit: " + currentPoints + "<sup>*</sup>"
        node.setAttribute("title", originalPoints + " by default")
    }
}

function overrideFormationPoints(node) {
    let delta = formationDelta(formationId)
    log("Point override for formation " + formationId + ": " + delta)
    let originalPoints = parseInt(node.textContent.split(":")[1])
    if (delta !== 0) {
        let currentPoints = originalPoints + delta
        node.innerHTML = "Formation: " + currentPoints + "<sup>*</sup>"
        node.setAttribute("title", originalPoints + " by default")
    }
}

function overrideArmyPoints(node) {
    let delta = armyDelta()
    log("Point override for army " + delta)
    let originalPoints = parseInt(node.textContent.split(":")[1])
    if (delta !== 0) {
        let currentPoints = originalPoints + delta
        node.innerHTML = "All: " + currentPoints + "<sup>*</sup>"
        node.setAttribute("title", originalPoints + " by default")
    }
}

function armyDelta() {
    let delta = 0
    for (const frmId of Object.keys(armyPoints[armyId] || {})) {
        delta += formationDelta(frmId)
    }
    return delta;
}

function formationDelta(frmId) {
    let modifier = (armyPoints[armyId] || {})[frmId] || {}
    let delta = 0
    for (const [_, value] of Object.entries(modifier)) {
        delta += value
    }
    return delta;
}

function clearUnitDelta(armyId, formationId, unitId) {
    ((armyPoints[armyId] || {})[formationId] || {})[unitId] = null
    chrome.storage.local.set(armyPoints)
}

function clearFormationDelta(armyId, formationId) {
    (armyPoints[armyId] || {})[formationId] = null
    chrome.storage.local.set(armyPoints)
}

function clearArmyDelta(armyId) {
    chrome.storage.local.remove(armyId)
}

function storeDelta(armyId, formationId, unitId, delta) {
    let data = {}
    let currentDelta = {}
    let formationPoints = {}

    formationPoints[unitId] = parseInt(delta)

    currentDelta[formationId] = formationPoints

    data[armyId] = currentDelta

    let mergedPoints = _.merge(armyPoints, data)

    chrome.storage.local.set(mergedPoints)
}

function readForcePointsFromStorage(callback) {
    log("Reading stored point values for army ID: " + armyId)
    chrome.storage.local.get(armyId, function (storedArmyPoints) {
        if (storedArmyPoints) {
            armyPoints = storedArmyPoints
            let nodes = document.querySelectorAll('div[class="cssPtLine"] div')
            overrideFormationPoints(nodes[1])
            overrideArmyPoints(nodes[2])
            callback()
            logArmyPoints()
        }
    })
}

function logArmyPoints() {
    log("-------------------\n" + JSON.stringify(armyPoints, null, "\t") + "-------------------\n")
}

function readUnitPointsFromStorage() {
    log("Reading stored point values for army ID: " + armyId)
    chrome.storage.local.get(armyId, function (storedArmyPoints) {
        if (storedArmyPoints) {
            armyPoints = storedArmyPoints
            let nodes = document.querySelectorAll('div[class="cssPtLine"] div')
            overrideUnitCost(nodes[1])
            overrideFormationPoints(nodes[2])
            overrideArmyPoints(nodes[3])
            logArmyPoints()
        }
    })
}