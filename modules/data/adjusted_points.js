const adjustedPrices = _.merge(
    afrikaKorps,
    ironCross,
    braveRomania,
    ghostPanzers,
    avanti,
    hungarianSteel,
    whiteDeath,
    soviets,
    fightingFirst,
    armouredFist)

const namedUnitsOverrides = _.merge(namedSoviet, namedArmouredFist, namedGerman, namedFightingFirst, namedItalian, axisCommandCardOverrides, namedWhiteDeath, namedHungarian)

const formationUnitOverrides = _.merge(formationIdOverrides, sovietFormationIdOverrides)

const formationNameUnitOverrides = _.merge(namedFormationOverrides, sovietNamedFormationOverrides)

const unitCardOverrides = _.merge(axisUnitCardOverrides, sovietUnitCardOverrides)

function getOverriddenCards(unitCustomName = unitName) {
    return Object.keys(axisCommandCardOverrides[unitCustomName] || {});
}

function getPoints(optionText, unitCustomName = unitName, customFormationId = formationId) {
    let trimmedOption = optionText.trim()
    let formationOvers = customFormationId ? formationUnitOverrides[customFormationId.split("-")[0]] || {} : {}
    let namedOvers = namedUnitsOverrides[unitCustomName] || {};
    return (formationOvers[unitCustomName] || {})[trimmedOption]
        || namedOvers[trimmedOption]
        || adjustedPrices[trimmedOption]
}

function getPointsWithFormationName(optionText, unitCustomName = unitName, card = null,  formationName = null) {
    let trimmedOption = optionText.trim()
    let formationOvers = formationName ? formationNameUnitOverrides[formationName] || {} : {}
    let unitCardOverride = card ? unitCardOverrides[card] || {} : {}
    let namedOvers = namedUnitsOverrides[unitCustomName] || {};
    return (formationOvers[unitCustomName] || {})[trimmedOption]
        || unitCardOverride[trimmedOption]
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