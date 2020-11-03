let armyPoints = {}

function overrideUnitCost(node) {
    let delta = ((armyPoints[armyId] || {})[formationId] || {})[unitId] || 0

    let originalPoints = parseInt(node.textContent.split(":")[1])
    if (delta !== 0 && originalPoints !== 0) {
        let currentPoints = originalPoints + delta
        node.innerHTML = "Unit: " + currentPoints + "<sup>*</sup>"
        node.setAttribute("title", originalPoints + " by default")
    }
}

function overrideFormationPoints(node) {
    let delta = formationDelta(formationId)

    let originalPoints = parseInt(node.textContent.split(":")[1])
    if (delta !== 0 && originalPoints !== 0) {
        let currentPoints = originalPoints + delta
        node.innerHTML = "Formation: " + currentPoints + "<sup>*</sup>"
        node.setAttribute("title", originalPoints + " by default")
    }
}

function overrideArmyPoints(node) {
    let delta = armyDelta()
    let originalPoints = parseInt(node.textContent.split(":")[1])
    if (delta !== 0 && originalPoints !== 0) {
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
    // delete ((armyPoints[armyId] || {})[formationId] || {})[unitId]
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