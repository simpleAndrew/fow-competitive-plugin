const points_field = "value"
const custom_field = "custom"

let armyPoints = {}

function overrideUnitCost(node) {
    let delta = (((armyPoints[armyId] || {})[formationId] || {})[unitId] || {})[points_field] || 0
    log("Point override for unit " + unitId + " in formation " + formationId + ": " + delta)
    let originalPoints = parseInt(node.textContent.split(":")[1])
    if (delta !== 0) {
        let currentPoints = originalPoints + delta
        node.innerHTML = "Unit: " + currentPoints + "<sup>*</sup>"
        node.setAttribute("title", originalPoints + " by default")
    }
}

function overrideFormationPoints(node) {
    let delta = formationDelta(formationId, armyId)
    log("Point override for formation " + formationId + ": " + delta)
    let originalPoints = parseInt(node.textContent.split(":")[1])
    if (delta !== 0) {
        let currentPoints = originalPoints + delta
        node.innerHTML = "Formation: " + currentPoints + "<sup>*</sup>"
        node.setAttribute("title", originalPoints + " by default")
    }
}

function overrideArmyPoints(node) {
    let delta = armyDelta(armyId)
    log("Point override for army " + delta)
    let originalPoints = parseInt(node.textContent.split(":")[1])
    if (delta !== 0) {
        let currentPoints = originalPoints + delta
        node.innerHTML = "All: " + currentPoints + "<sup>*</sup>"
        node.setAttribute("title", originalPoints + " by default")
    }
}

function armyDelta(armId) {
    let delta = 0
    for (const frmId of Object.keys(armyPoints[armId] || {})) {
        delta += formationDelta(frmId, armId)
    }
    return delta;
}

function formationDelta(frmId, armId) {
    let units = (armyPoints[armId] || {})[frmId] || {}
    let delta = 0
    for (let unitData in units) {
        delta += (units[unitData] || {})[points_field] || 0
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

    formationPoints[unitId] = {[points_field]: parseInt(delta)}

    currentDelta[formationId] = formationPoints

    data[armyId] = currentDelta

    let mergedPoints = _.merge(armyPoints, data)

    chrome.storage.local.set(mergedPoints)
}

function storeCustomOptions(armyId, formationId, unitId, options) {
    let data = {}
    let currentDelta = {}
    let formationPoints = {}

    formationPoints[unitId] = {[custom_field]: options}

    currentDelta[formationId] = formationPoints

    data[armyId] = currentDelta

    let mergedPoints = _.merge(armyPoints, data)

    chrome.storage.local.set(mergedPoints)
}

function getCustomOptions(armyId, formationId, unitId) {
    return (((armyPoints[armyId] || {})[formationId] || {})[unitId] || {})[custom_field] || {}
}

function getCustomOptionValue(armyId, optionName) {
    return _.flatMap(armyPoints[armyId], f => _.flatMap(f))
        .filter(a => ((a || {})[custom_field] || {})[optionName])
        .map(e => e[custom_field][optionName])[0]

}

function readForcePointsFromStorage(callback) {
    initArmyPoints(_ => {
        let nodes = document.querySelectorAll('div[class="cssPtLine"] div')
        overrideFormationPoints(nodes[1])
        overrideArmyPoints(nodes[2])
        callback()
        logArmyPoints()
    })
}

function logArmyPoints() {
    log("-------------------\n" + JSON.stringify(armyPoints, null, "\t") + "-------------------\n")
}

function readUnitPointsFromStorage(callback) {
    initArmyPoints(_ => {
        let nodes = document.querySelectorAll('div[class="cssPtLine"] div')
        overrideUnitCost(nodes[1])
        overrideFormationPoints(nodes[2])
        overrideArmyPoints(nodes[3])
        callback()
    })
}

function initArmyPoints(callback) {
    log("Reading stored point values for army ID: " + armyId)
    chrome.storage.local.get(armyId, function (storedArmyPoints) {
        if (storedArmyPoints) {
            log("Stored point values are read; army ID: " + armyId)
            armyPoints = storedArmyPoints
            callback()
            // logArmyPoints()
        }
    })
}