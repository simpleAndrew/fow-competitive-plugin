let pointsVersion = "1.3"

let armyId
let formationId
let unitId

let unitName

function logIds() {
    log(`IDs: Amry[${armyId}]; Formation[${formationId}]; Unit[${unitId}]`)
}

function unitInitIds() {
    let urlString = document.location.pathname.split("/")
    armyId = urlString[3]
    formationId = urlString[4] + '-' + urlString[5]
    unitId = urlString[6]
    unitName = document.querySelector('div[class="UTitle"]').textContent
    logIds()
    log(`Unit Name: ${unitName}`)
}


function printInitIds() {
    let urlString = document.location.pathname.split("/")
    armyId = urlString[3]
    formationId = urlString[4] + '-' + urlString[5]
    logIds()
}

function forceInitIds() {
    let urlString = document.location.pathname.split("/")
    armyId = urlString[3]
    formationId = urlString[4] + '-' + urlString[5]
    logIds()
}

/**
 * All formations from mid war as on 18.08.2022.
 * Next time to extract them use the following:
 *
 * Handy script to extract formation numbers from books page:
 * Array.from(document.querySelectorAll('div[class="BoxOuter BoxOuterType11"] a')).map( e => {
 *     let i = e.href.indexOf("ReturnUrl")
 *     return e.href.substring(i-6, i-3)})
 *
 * And another one to sort the results and remove duplicates:
 * [<array of all formation IDs>].map(i => parseInt(i)).sort((a,b) =>  a - b).reduce((agg, v) => {if(agg.indexOf(v) === -1) agg.push(v)
 *     return agg}, new Array())
 **/

const midWarFormations = [61, 62, 63, 64, 65, 99, 100, 101, 102, 103, 104, 105, 106, 107, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 141, 142, 143, 144, 145, 146, 147, 148, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 324, 325, 326, 327, 329, 330, 331, 364, 365, 530, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 553, 554, 555, 556, 557, 558, 559, 560, 561, 581, 582, 583, 584, 585, 636, 637, 638, 639, 640, 641, 642, 643, 644, 645, 646]

function isFormationSupported(formation) {
    const formationRegex = /(\d+).*/
    let formId = formationRegex.exec(formation)[1]
    if (formId) {
        let formNum = parseInt(formId)
        log(`Identified formation ID:${formNum}`)
        let isFormationAdjusted = midWarFormations.indexOf(formNum) !== -1;
        log(`Is Formation going to be adjusted: ${isFormationAdjusted}`)
        return isFormationAdjusted
    } else {
        return false
    }
}