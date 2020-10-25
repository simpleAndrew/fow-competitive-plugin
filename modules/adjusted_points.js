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
    "4x StuG (long 7.5cm)": 28,
    "3x StuG (long 7.5cm)": 21,
    "2x StuG (long 7.5cm)": 13,

    "4x 5cm gun": 12,
    "3x 5cm gun": 9,
    "2x 5cm gun": 6,

    "4x 3.7cm gun": 7,
    "3x 3.7cm gun": 5,
    "2x 3.7cm gun": 3,

    "4x 3.7cm (Stielgranate) gun": 9,
    "3x 3.7cm (Stielgranate) gun": 7,
    "2x 3.7cm (Stielgranate) gun": 4,
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

    "4x Brummbär (15cm)": 24,
    "3x Brummbär (15cm)": 18,
    "2x Brummbär (15cm)": 12,
    "2x Brummbär": 12,
    "1x Brummbär": 6,

    "4x Marder II (7.5cm)": 25,
    "3x Marder II (7.5cm)": 19,
    "2x Marder II (7.5cm)": 13,

    "3x Sd Kfz 7/1 (2cm quad)": 4,
    "2x Sd Kfz 7/1 (2cm quad)": 3,
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

    "28x M1891 rifle team<br>1x Komissar team": 20,
    "19x M1891 rifle team<br>1x Komissar team": 13,

    "5x KV-1s (76mm)": 35,
    "4x KV-1s (76mm)": 28,
    "3x KV-1s (76mm)": 21,
}

const redBanner = {
    "4x SU-85 (85mm)": 31,
    "3x SU-85 (85mm)": 23,
    "2x SU-85 (85mm)": 15,

    "4x SU-122 (122mm)": 16,
    "2x SU-122 (122mm)": 12,
    "3x SU-122 (122mm)": 8,

    "2x SU-152 (152mm)": 14
}

const fightingFirst = {
    "5x M4 Sherman (75mm)": 32,
    "4x M4 Sherman (75mm)": 25,
    "3x M4 Sherman (75mm)": 18,
    "2x M4 Sherman (75mm)": 13,
    "1x M4 Sherman (75mm)": 7,

    "4x T28E1 (37mm &amp; .50 cal)": 4,
    "2x T28E1 (37mm &amp; .50 cal)": 2,

    "6x M7 Priest (105mm)": 18,
    "3x M7 Priest (105mm)": 9,

    "4x M10 (3-inch)":28,
    "3x M10 (3-inch)":21,
    "2x M10 (3-inch)":14,

    "3x M4 (81mm mortar)": 3,

    "3x T30 (75mm)": 4,
    "2x T30 (75mm)": 3
}

const adjustedPrices = _.merge(afrikaKorps,
    armouredFist,
    ironCross,
    ghostPanzers,
    avanti,
    enemyAtTheGates,
    redBanner,
    fightingFirst)

const adjustedOptionPrices = {
    //DAK and Iron Cross
    "Replace any or all Panzer III (short 5cm) with Panzer III (long 5cm) for +2 points each.": 1,
    "Uparmour any or all Panzer III (long 5cm) to Front 6 for +1 point each.": 2,
    "Replace any or all short 5cm with 7.5cm for +3 points each.": 2,
    "Replace any or all Panzer IV (short 7.5cm) with Panzer IV (long 7.5cm) for +4 points each.": 3,

    //ghost panzers
    "Replace up to one Panzer IV (late 7.5cm) with Panzer III (late 7.5cm) for -4 points.": -1,
    "Replace up to two Panzer III (late 5cm) with Panzer IV (late 7.5cm) for +5 points each." : 2,
    "Replace any or all StuG (long 7.5cm) assault guns with StuG (late 7.5cm) (MG251) for +4 points per tank.": 3,

    //red banner
    "Replace up to half of Valentine (late 2 pdr) with Valentine (6 pdr) for +1 point each.": 2
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
    },

    "Rifle Company" : {
        "28x DP MG and M1891 rifle team<br>1x Komissar team": 18,
        "19x DP MG and M1891 rifle team<br>1x Komissar team": 12
    },

    "Motor Rifle Company" : {
        "28x DP MG &amp; M1891 rifle team<br>1x Komissar team": 22,
        "19x DP MG &amp; M1891 rifle team<br>1x Komissar team": 15
    },

    "KV-1s Guards Heavy Tank Company": {
        "5x KV-1s (76mm)": 43,
        "4x KV-1s (76mm)": 34,
        "3x KV-1s (76mm)": 25,
        "2x KV-1s (76mm)": 16
    },

    "KV-1s Guards Heavy Tank Regiment HQ": {
        "1x KV-1s (76mm)": 8
    },

    "Reconnaissance by Combat": {
        "Command Card Reconnaissance by Combat": 3
    },

    "BA-10 Armoured Car Company": {
        "1x BA-10 (45mm)": 3
    },

    "SU-152 Medium SP Regiment" : {
        "1x KV-1s (76mm)": 8
    }
}

const namedFightingFirst = {
    "M3A1 Armored Recon Company": {
        "2x M3A1 armoured car from (MU107)": 4
    }
}

const namedArmouredFist = {
    "New Zealand Divisional Cavalry" : {
        "2x Honey from (MB107)" : 5
    },

    "Australian Divisional Cavalry" : {
        "2x Crusader II from (MB104)": 5
    },

    "Mailed Fist Armoured Car Squadron" : {
        "3x Humber armoured cars from (MB115)": 5,
        "4x Humber armoured cars from (MB115)": 6
    },

    "Daimler Armoured Car Squadron" : {
        "3x Humber armoured cars from (MB115)": 5,
        "4x Humber armoured cars from (MB115)": 6
    },

    "Humber Armoured Car Squadron" : {
        "3x Humber armoured cars from (MB115)": 5,
        "4x Humber armoured cars from (MB115)": 6
    },

    "Artillery Expert": {
        "Command Card Artillery Expert": 2
    },

    "Scout Tanks" : {
        "Command Card Scout Tanks": 3
    }
}

const namedGerman = {
    "Armoured Car Company": {
        "1x Sd Kfz 221 (MG)" : 3
    },
    "Captured 6 pdr Anti-tank (with 3 guns)" : {
        "Command Card Captured 6 pdr Anti-tank (with 3 guns)": -1
    },
    "Captured 6 pdr Anti-tank (with 2 guns)" : {
        "Command Card Captured 6 pdr Anti-tank (with 2 guns)": -1
    },
    "Armoured FlaK Half-tracks": {
        "Armoured FlaK Half-tracks Command Card": 2
    }
}

const namedItalian = {

    "Tactical Brilliance": {
        "Command Card Tactical Brilliance": 3
    },

    "AB41 Armoured Car Company HQ": {
        "2x AB41 (20mm) from (MI113)": 3
    },

    "L6/40 Scout Tank Company HQ": {
        "4x L6/40 (20mm)": 7,
        "3x L6/40 (20mm)": 6,
        "2x L6/40 (20mm)": 5
    },
}

const namedUnitsOverrides = _.merge(namedSoviet, namedArmouredFist, namedGerman, namedFightingFirst, namedItalian)

const namedAdditionalOptionPoints = {}

const formationUnitOverrides = {
    "156": {
        "L6/40 Light Tank Company HQ": {
            "4x L6/40 (20mm)": 8,
            "3x L6/40 (20mm)": 6,
            "2x L6/40 (20mm)": 4
        },

        "L6/40 Light Tank Platoon": {
            "5x L6/40 (20mm)": 10,
            "4x L6/40 (20mm)": 8,
            "3x L6/40 (20mm)": 6,
        }
    }
}

function getPoints(optionText, unitCustomName = unitName, customFormationId = formationId) {
    let trimmedOption = optionText.trim()
    let formationOvers = formationUnitOverrides[customFormationId.split("-")[0]] || {}
    let namedOvers = namedUnitsOverrides[unitCustomName] || {};
    return (formationOvers[unitCustomName] || {})[trimmedOption]
        || namedOvers[trimmedOption]
        || adjustedPrices[trimmedOption]
}

function getAdjustedOptionPoints(additionalOptionPrice) {
    let trimmedName = additionalOptionPrice.trim()
    return adjustedOptionPrices[trimmedName];
}