const armouredFist = {
    "4x Sherman (75mm)": 29,
    "3x Sherman (75mm)": 21,
    "2x Sherman (75mm)": 14,
    "3x Sherman (75mm)": 21,
    "1x Grant (37mm &amp; 75mm) (MB102)<br>2x Sherman (75mm)": 20,
    "4x Priest (105mm)": 14,
    "2x Priest (105mm)": 7,
    "3x Humber (15mm)": 4,
    "2x Daimler (2 pdr)": 4
}

const afrikaKorps = {
    "4x Panzer IV (short 7.5cm)": 19,
    "3x Panzer IV (short 7.5cm)": 14,
    "2x Panzer IV (short 7.5cm)": 9,
    "1x Panzer IV (short 7.5cm)": 4,
    "5x Panzer III (7.5cm)": 35,
    "4x Panzer III (7.5cm)": 28,
    "3x Panzer III (7.5cm)": 21,
    "2x Panzer III (7.5cm)": 14,
    "1x Panzer III (7.5cm)": 7,
    "5x Panzer III (uparmoured)": 35,
    "4x Panzer III (uparmoured)": 28,
    "3x Panzer III (uparmoured)": 21,
    "2x Panzer III (uparmoured)": 14,
    "1x Panzer III (uparmoured)": 7,
    "2x Sd Kfz 222 (2cm)<br>1x Sd Kfz 221 (MG)": 3,
    "3x Diana (7.62cm)": 12,
    "2x Diana (7.62cm)": 8,
    "4x Sd Kfz 10/4 (2cm)": 4,
    "3x Sd Kfz 10/4 (2cm)": 3,
    "2x Sd Kfz 10/4 (2cm)": 2,
    "4x Marder (7.62cm)": 22,
    "3x Marder (7.62cm)": 16,
    "2x Marder (7.62cm)": 10,
    "3x 5cm guns": 9,
    "2x 5cm guns": 6
}

const adjustedPrices = _.merge(afrikaKorps, armouredFist)

function getAdjustedPoints(unitText) {
    for(const [key, value] of Object.entries(adjustedPrices)){
        if(unitText.startsWith(key)) return value;
    }
    return null;
}