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

const ironCross = {
    "3x StuG (short 7.5cm)": 12,
    "2x StuG (short 7.5cm)": 8,
    "3x StuG (long 7.5cm)": 21,
    "2x StuG (long 7.5cm)": 13,

    "4x 5cm guns": 12,

    "4x 3.7cm guns": 7,
    "3x 3.7cm guns": 5,
    "2x 3.7cm guns": 3,

    "4x 3.7cm (stielgranate) guns": 9,
    "3x 3.7cm (stielgranate) guns": 7,
    "2x 3.7cm (stielgranate) guns": 4,
}

const ghostPanzers = {
    "5x Panzer IV (late 7.5cm)": 45,
    "4x Panzer IV (late 7.5cm)": 36,
    "3x Panzer IV (late 7.5cm)": 27,
    "2x Panzer IV (late 7.5cm)": 18,
    "1x Panzer IV (late 7.5cm)": 9,

    "1x Panzer IV (late 7.5cm)<br>1x Panzer III (late 5cm)": 16,

    "5x Panzer III (late 5cm)": 36,
    "4x Panzer III (late 5cm)": 29,
    "3x Panzer III (late 5cm)": 22,
    "2x Panzer III (late 5cm)": 14,
    "1x Panzer III (late 5cm)": 9,

    "5x Panther (7.5cm)": 70,
    "4x Panther (7.5cm)": 56,
    "3x Panther (7.5cm)": 42,
    "2x Panther (7.5cm)": 28,
    "1x Panther (7.5cm)": 14,

    "4x StuG (late 7.5cm)": 36,
    "3x StuG (late 7.5cm)": 27,
    "2x StuG (late 7.5cm)": 18,
    "1x StuG (late 7.5cm)": 9,
    "2x StuG (late 7.5cm)<br>1x StuH (10.5cm)": 27,

    "4x Brummbar (15cm)": 24,
    "3x Brummbar (15cm)": 18,
    "2x Brummbar (15cm)": 12,

    "4x Marder (7.5cm)": 25,
    "3x Marder (7.5cm)": 19,
    "2x Marder (7.5cm)": 13,

    "3x Sd Kfz 7/1 (2cm Quad)": 4,
    "2x Sd Kfz 7/1 (2cm Quad)": 3,
}

const avanti = {
    "4x Autocannone (20mm)": 4,
    "2x Autocannone (20mm)": 2,

    "3x Breda MG team<br>1x Breda HMG team<br>1x 20mm anti-tank rifle": 6,
    "4x Breda MG team<br>1x Breda HMG team<br>1x 20mm anti-tank rifle": 5,

    "4x 47mm guns": 6,
    "3x 47mm guns": 4,
    "2x 47mm guns": 2,

    "5x L6/40 (20mm)": 7,
    "4x L6/40 (20mm)": 5,
    "3x L6/40 (20mm)": 4,

    "4x AB41 (20mm)": 4,
    "3x AB41 (20mm)": 3,

    "4x 100mm howitzers": 10,
    "2x 100mm howitzers": 5,
}

const enemyAtTheGates = {
    "10x T-34 (76mm)": 40,
    "9x T-34 (76mm)": 36,
    "8x T-34 (76mm)": 32,
    "7x T-34 (76mm)": 28,
    "6x T-34 (76mm)": 24,
    "5x T-34 (76mm)": 20,
    "4x T-34 (76mm)": 16,
    "3x T-34 (76mm)": 12,
    "1x T-34 (76mm)": 4,

    "3x BA-10 (45mm)": 3,

    "28x DP MG &amp; M1819 rifle team<br>1x Komissar": 18,
    "19x DP MG &amp; M1819 rifle team<br>1x Komissar": 12,

    "28x M1819 rifle team<br>1x Komissar": 20,
    "19x M1819 rifle team<br>1x Komissar": 13,

    "5x KV-1S (76mm)": 35,
    "4x KV-1S (76mm)": 28,
    "3x KV-1S (76mm)": 21
}

const redBanner = {}

const adjustedPrices = _.merge(afrikaKorps,
    armouredFist,
    ironCross,
    ghostPanzers,
    avanti,
    enemyAtTheGates,
    redBanner)

const adjustedOptionPrices = {
    "Replace any or all Panzer III (short 5cm) with Panzer III (long 5cm) for +2 points each.": 1,
    "Uparmour any or all Panzer III (long 5cm) to Front 6 for +1 point each.": 2,
    "Replace any or all short 5cm with 7.5cm for +3 points each.": 2,
    "Replace any or all Panzer IV (short 7.5cm) with Panzer IV (long 7.5cm) for +4 points each.": 3
}

const namedSoviet = {

    "T-34 Tank Battalion HQ" : {
        "1x T-34 (76mm)" : 4
    },

    "T-34 Tank Company" : {
        "10x T-34 (76mm)": 45,
        "9x T-34 (76mm)": 40,
        "8x T-34 (76mm)": 35,
        "7x T-34 (76mm)": 30,
        "6x T-34 (76mm)": 25,
        "5x T-34 (76mm)": 21,
        "4x T-34 (76mm)": 17,
        "3x T-34 (76mm)": 13
    },

    "T-34 Hero Tank Battalion HQ" : {
        "1x T-34 (76mm)" : 6
    },

    "T-34 Hero Tank Company" : {
        "3x T-34 (76mm)": 17
    }
}

const namedUnitsOverrides = namedSoviet

function getPoints(optionText) {
    if (namedUnitsOverrides[unitName]) {
        return namedUnitsOverrides[unitName][optionText]
    } else return adjustedPrices[optionText]
}

function getPointsForPrinting(unitText) {
    for (const [key, value] of Object.entries(adjustedPrices)) {
        if (unitText.startsWith(key)) return value;
    }
    return null;
}

function getAdjustedOptionPoints(unitText) {
    return adjustedOptionPrices[unitText.trim()]
}