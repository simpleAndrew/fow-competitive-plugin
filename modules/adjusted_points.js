const armouredFist = {
    "4x Sherman (75mm)": 29,
    "3x Sherman (75mm)": 21,
    "2x Sherman (75mm)": 14,
    "3x Sherman (75mm)": 21,
    "1x Grant (37mm & 75mm) (MB102)": 20,
    "4x Priest (105mm)": 14,
    "2x Priest (105mm)": 7,
    "3x Humber (15mm)": 4,
    "2x Daimler (2 pdr)": 4
}

const adjustedPrices = _.merge({}, armouredFist)

function getAdjustedPoints(unitText) {
    for(const [key, value] of Object.entries(adjustedPrices)){
        if(unitText.startsWith(key)) return value;
    }
    return null;
}