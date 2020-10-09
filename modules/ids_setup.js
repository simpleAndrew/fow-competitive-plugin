
let armyId
let formationId
let unitId

function unitInitIds() {
    let urlString = document.location.pathname.split("/")
    armyId = urlString[3]
    formationId = urlString[4]+ '-' + urlString[5]
    unitId = urlString[6]
}

function forceInitIds() {
    let urlString = document.location.pathname.split("/")
    armyId = urlString[3]
    formationId = urlString[4]+ '-' + urlString[5]
}