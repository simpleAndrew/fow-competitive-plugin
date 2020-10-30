
const adjustedPrices = _.merge(afrikaKorps, armouredFist, ironCross, ghostPanzers, avanti, enemyAtTheGates, redBanner, fightingFirst)

const namedUnitsOverrides = _.merge(namedSoviet, namedArmouredFist, namedGerman, namedFightingFirst, namedItalian)

const formationUnitOverrides = italianNumberedFormationOverrides

const formationNameUnitOverrides = italianNamedFormationOverrides

function getPoints(optionText, unitCustomName = unitName, customFormationId = formationId) {
    let trimmedOption = optionText.trim()
    let formationOvers = customFormationId ? formationUnitOverrides[customFormationId.split("-")[0]] || {} : {}
    let namedOvers = namedUnitsOverrides[unitCustomName] || {};
    return (formationOvers[unitCustomName] || {})[trimmedOption]
        || namedOvers[trimmedOption]
        || adjustedPrices[trimmedOption]
}

function getPointsWithFormationName(optionText, unitCustomName = unitName, formationName = null) {
    let trimmedOption = optionText.trim()
    let formationOvers = formationName ? formationNameUnitOverrides[formationName] || {} : {}
    let namedOvers = namedUnitsOverrides[unitCustomName] || {};
    return (formationOvers[unitCustomName] || {})[trimmedOption]
        || namedOvers[trimmedOption]
        || adjustedPrices[trimmedOption]
}

function getAdjustedOptionPoints(additionalOptionPrice) {
    let trimmedName = additionalOptionPrice.trim()
    return adjustedOptionPrices[trimmedName];
}