
let armyId
let formationId
let unitId

let unitName

function unitInitIds() {
    let urlString = document.location.pathname.split("/")
    armyId = urlString[3]
    formationId = urlString[4]+ '-' + urlString[5]
    unitId = urlString[6]
    unitName = document.querySelector('div[class="UTitle"]').textContent
}

function printInitIds() {
    let urlString = document.location.pathname.split("/")
    armyId = urlString[3]
    formationId = urlString[4]+ '-' + urlString[5]
}

function forceInitIds() {
    let urlString = document.location.pathname.split("/")
    armyId = urlString[3]
    formationId = urlString[4]+ '-' + urlString[5]
}

function isFormationSupported(formation) {
    const formationRegex = /(\d+).*/
    let formId = formationRegex.exec(formation)[1]
    if(formId) {
        let formNum = parseInt(formId)
        console.log("Identified formation ID:" + formNum)
        let isFormationAdjusted = formNum < 200 || (formNum => 530 && formNum <= 550);
        console.log("Is Formation going to be adjusted: " + isFormationAdjusted)
        return isFormationAdjusted
    } else {
        return false
    }
}