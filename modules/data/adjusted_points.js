
const adjustedPrices = _.merge(
    afrikaKorps,
    ironCross,
    braveRomania,
    ghostPanzers,
    avanti,
    hungarianSteel,
    whiteDeath,
    enemyAtTheGates,
    redBanner,
    fightingFirst,
    armouredFist)

const namedUnitsOverrides = _.merge(namedSoviet, namedArmouredFist, namedGerman, namedFightingFirst, namedItalian, cardOverrides)

const formationUnitOverrides = italianNumberedFormationOverrides

const formationNameUnitOverrides = italianNamedFormationOverrides

function getOverriddenCards(unitCustomName = unitName) {
    return Object.keys(cardOverrides[unitCustomName] || {});
}

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

function getPotentialComplexOptions(unitName) {
    return customSelectionOptions[unitName]
}