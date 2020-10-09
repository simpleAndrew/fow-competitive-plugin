forceInitIds()
chrome.storage.local.get(armyId, function (storedArmyPoints) {
    if (storedArmyPoints) {
        armyPoints = storedArmyPoints
        let nodes = document.querySelectorAll('div[class="cssPtLine"] div')
        overrideFormationPoints(nodes[1])
        overrideArmyPoints(nodes[2])
        overrideStoredFormationCosts()
    }
})

function overrideStoredFormationCosts() {
    const pointsRegexp = /Modify \((\d+) .+/
    let formationLinks = document.querySelectorAll('div[tabindex="-1"] div[style="float:left;"] a')
    formationLinks.filter(frmLink => {
        return frmLink.textContent.startsWith("Modify")
    }).forEach(storedLink => {
        let currentPoints = parseInt(pointsRegexp.exec(storedLink.textContent)[1])
        let parts = storedLink.href.split("/")
        let formation = parts[parts.length - 2] + "-" + parts[parts.length - 1]
        let delta = formationDelta(formation)
        if (delta !== 0) {
            let overridenPoints = currentPoints + delta
            storedLink.innerHTML = "Modify (" + overridenPoints + "<sup>*</sup> points)"
        }
    });
}

let resetForce = document.querySelector('li[id="ucHeader_hclear"] a')
    if(resetForce)
        resetForce.addEventListener("click", function ()  {clearArmyDelta(armyId)})

let resetFormation = document.querySelector('li[id="ucHeader_hform"] a')
    if(resetFormation)
        resetFormation.addEventListener("click", function ()  {clearFormationDelta(armyId, formationId)})

