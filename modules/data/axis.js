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

    "5x Panzer II (2cm)": 9,
    "4x Panzer II (2cm)": 7,
    "3x Panzer II (2cm)": 5,

    "2x Sd Kfz 222 (2cm)<br>1x Sd Kfz 221 (MG)": 3,
    "2x Sd Kfz 222 (2cm)<br>2x Sd Kfz 221 (MG)": 4,

    "3x Diana (7.62cm)": 12,
    "2x Diana (7.62cm)": 8,

    "3x 7.62cm gun": 13,
    "2x 7.62cm gun": 9,

    "4x Sd Kfz 10/4 (2cm)": 4,
    "3x Sd Kfz 10/4 (2cm)": 3,
    "2x Sd Kfz 10/4 (2cm)": 2,

    "4x Marder (7.62cm)": 22,
    "3x Marder (7.62cm)": 16,
    "2x Marder (7.62cm)": 10,

    "3x 5cm guns": 9,
    "2x 5cm guns": 6,

    "4x 10.5cm howitzer": 12,
    "2x 10.5cm howitzer": 6
}

const ironCross = {
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

    "2x Sd Kfz 222 (2cm)<br>1x Sd Kfz 221 (MG)": 3,
    "2x Sd Kfz 222 (2cm)<br>2x Sd Kfz 221 (MG)": 4,


    "3x Sd Kfz 7/1 (2cm quad)": 4,
    "2x Sd Kfz 7/1 (2cm quad)": 3,

    "4x 7.5cm infantry gun": 11,
    "2x 7.5cm infantry gun": 5,

    "2x 15cm infantry gun": 6,

    "4x 10.5cm howitzer": 12,
    "2x 10.5cm howitzer": 6,

    "4x Sd Kfz 10/4 (2cm)": 4,
    "3x Sd Kfz 10/4 (2cm)": 3,
    "2x Sd Kfz 10/4 (2cm)": 2

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
    "1x Panzer III (late 5cm)": 7,

    "5x Panther (7.5cm)": 65,
    "4x Panther (7.5cm)": 52,
    "3x Panther (7.5cm)": 39,
    "2x Panther (7.5cm)": 26,
    "1x Panther (7.5cm)": 13,

    "4x StuG (late 7.5cm)": 36,
    "3x StuG (late 7.5cm)": 27,
    "2x StuG (late 7.5cm)": 18,

    "1x StuG (late 7.5cm)": 9,
    "2x StuG (late 7.5cm)<br>1x StuH (10.5cm)": 27,

    "7x Flammpanzer III": 29,
    "6x Flammpanzer III": 25,
    "5x Flammpanzer III": 21,
    "4x Flammpanzer III": 17,
    "3x Flammpanzer III": 13,
    "2x Flammpanzer III": 9,

    "4x Brummbär (15cm)": 24,
    "3x Brummbär (15cm)": 18,
    "2x Brummbär (15cm)": 12,
    "2x Brummbär": 12,
    "1x Brummbär": 6,

    "4x Marder (7.6cm)": 22,
    "3x Marder (7.62cm)": 16,
    "2x Marder (7.62cm)": 10,

    "2x Sd Kfz 222 (2cm)<br>1x Sd Kfz 221 (MG)": 3,

    "4x Sd Kfz 10/4 (2cm)": 4,
    "3x Sd Kfz 10/4 (2cm)": 3,
    "2x Sd Kfz 10/4 (2cm)": 2,

    "4x 5cm gun": 12,
    "3x 5cm gun": 9,
    "2x 5cm gun": 6,

    "3x Sd Kfz 7/1 (2cm quad)": 4,
    "2x Sd Kfz 7/1 (2cm quad)": 3,

    "4x 7.5cm infantry gun": 11,
    "2x 7.5cm infantry gun": 5,

    "2x 15cm infantry gun": 6,

    "4x 10.5cm howitzer": 12,
    "2x 10.5cm howitzer": 6,

}

const avanti = {
    "4x Autocannone (20mm)": 4,
    "2x Autocannone (20mm)": 2,

    "3x Breda MG team<br>1x Breda HMG team<br>1x 20mm anti-tank rifle": 5,
    "2x Breda MG team<br>1x Breda HMG team<br>1x 20mm anti-tank rifle": 4,

    "5x Breda MG & Carcano rifle team<br>2x Brixia mortar team<br>2x Flame-thrower team": 12,
    "3x Breda MG & Carcano rifle team<br>1x Brixia mortar team<br>1x Flame-thrower team": 6,

    "5x L6/40 (20mm)": 7,
    "4x L6/40 (20mm)": 5,
    "3x L6/40 (20mm)": 4,

    "4x AB41 (20mm)": 4,
    "3x AB41 (20mm)": 3,

    "4x 100mm howitzer": 10,
    "2x 100mm howitzer": 5,

}

const whiteDeath = {
    "3x T-34 (76mm)": 21,
    "2x T-34 (76mm)": 14,

    "3x 81mm mortar": 4,
    "2x 81mm mortar": 3,

    "2x 37mm gun": 4,
    "2x 37mm gun (Stielgranate)": 5,

    "2x 45mm gun": 5,

    "3x BT-42 (114mm)": 10,
    "2x BT-42 (114mm)": 7,

    "4x 105mm howitzer": 10,
    "2x 105mm howitzer": 5,

    "4x 122mm howitzer": 8,
    "2x 122mm howitzer": 4

}

const hungarianSteel = {


    "4x 40mm gun": 6,
    "2x 40mm gun": 3,

    "4x 40mm gun with Kerngranate": 8,
    "2x 40mm gun with Kerngranate ": 4,

    "4x 50mm gun": 9,
    "2x 50mm gun": 4,

    "4x 81mm mortar": 3,

    "4x Short 75mm gun": 8,
    "2x Short 75mm gun": 4,

    "4x 75mm mountain gun": 8,
    "2x 75mm mountain gun": 4,

    "3x Csaba": 3,

    "4x Marder II (7.5cm)": 23,
    "3x Marder II (7.5cm)": 17,
    "2x Marder II (7.5cm)": 11

}

const braveRomania = {
    "3x T-3 (7.5cm)": 18,
    "1x T-3 (7.5cm)": 6,

    "3x T-4 (Long 7.5cm)": 21,
    "1x T-4 (Long 7.5cm)": 7,

    "3x 50mm gun": 9,
    "2x 50mm gun": 6,

    "2x AB (2cm)<br>1x AB (MG)": 3
}

const namedGerman = {
    "Armoured Car Company": {
        "1x Sd Kfz 221 (MG)": 3,
        "1x Sd Kfz 221 (MG) armoured car from (MG223)": 3,
        "1x Luchs (2cm) tank from (MG258)": 4
    },

    "Captured 6 pdr Anti-tank (with 3 guns)": {
        "Command Card Captured 6 pdr Anti-tank (with 3 guns)": -1
    },
    "Captured 6 pdr Anti-tank (with 2 guns)": {
        "Command Card Captured 6 pdr Anti-tank (with 2 guns)": -1
    },
    "Armoured FlaK Half-tracks": {
        "Armoured FlaK Half-tracks Command Card": 2
    },
    "StuG Company (RC)": {
        "2x StuG (long 7.5cm)": 14
    },
    "Captured T-34 Platoon": {
        "4x T-34 (76mm) from (MS137)": 29,
        "3x T-34 (76mm) from (MS137)": 22,
        "1x Panzer IV (late 7.5cm) from (MG236)<br>4x T-34 (76mm) from (MS137)": 38,
        "1x Panzer IV (late 7.5cm) from (MG236)<br>3x T-34 (76mm) from (MS137)": 31,
        "1x Panzer IV (late 7.5cm) from (MG236)<br>2x T-34 (76mm) from (MS137)": 24
    },
    "Fallschirmjäger Marder II (7.5cm) Tank-hunter Platoon":{
        "4x Marder II (7.5cm)": 25,
        "3x Marder II (7.5cm)": 19,
        "2x Marder II (7.5cm)": 13
    },
    "Fallschirmjäger 8cm Mortar Platoon": {
        "4x 8cm Stummel mortar": 6,
        "3x 8cm Stummel mortar": 5,
        "2x 8cm Stummel mortar": 3
    },
    "Fallschirmjäger 3.7cm Tank-hunter Platoon": {
        "4x 3.7cm gun": 8,
        "3x 3.7cm gun": 6,
        "2x 3.7cm gun": 4,

        "4x 3.7cm (Stielgranate) gun": 10,
        "3x 3.7cm (Stielgranate) gun": 8,
        "2x 3.7cm (Stielgranate) gun": 5,
    },
    "Fallschirmjäger 10.5cm Recoilless Battery": {
        "4x 10.5cm recoilless gun": 12,
        "2x 10.5cm recoilless gun": 6
    },
    "Fallschirmjäger 7.5cm Artillery Battery": {
        "4x 7.5cm mountain gun": 10,
        "2x 7.5cm mountain gun": 5
    },
    "Fallschirmjäger 7.5cm Tank-hunter Platoon" : {
        "4x 7.5cm gun": 21,
        "3x 7.5cm gun": 16,
        "2x 7.5cm gun": 11
    },
    "Fallschirmjäger 2cm Anti-aircraft Platoon": {
        "4x 2cm anti-aircraft gun": 8,
        "3x 2cm anti-aircraft gun": 6,
        "2x 2cm anti-aircraft gun": 4
    },
    "Fallschirmjäger 5cm Tank-hunter Platoon": {
        "4x 5cm gun": 14,
        "3x 5cm gun": 11,
        "2x 5cm gun": 7
    }
}

const namedItalian = {

    "Parachutist 47mm anti-tank platoon": {
        "4x 47mm gun": 6,
        "3x 47mm gun": 4,
        "2x 47mm gun": 3
    },
    "47mm anti-tank platoon": {
        "4x 47mm gun": 6,
        "3x 47mm gun": 4,
        "2x 47mm gun": 3
    },

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

//this one is for printing
const italianNamedFormationOverrides = {
    "L6/40 Light Tank Company Command Card": {
        "L6/40 Light Tank Company HQ": {
            "4x L6/40 (20mm)": 8,
            "3x L6/40 (20mm)": 6,
            "2x L6/40 (20mm)": 4
        },

        "L6/40 Light Tank Platoon": {
            "5x L6/40 (20mm)": 8,
            "4x L6/40 (20mm)": 6,
            "3x L6/40 (20mm)": 5,
        }
    }
}

const hungarianNamedFormationOverrides = {
    "Panzer IV Heavy Tank Company": {
        "Panzer IV Heavy Tank Company HQ": {
            "2x Panzer IV (short 7.5cm)": 12,
            "1x Panzer IV (short 7.5cm)": 6,
        },
        "Panzer IV Tank Platoon": {
            "3x Panzer IV (short 7.5cm)": 18,
            "2x Panzer IV (short 7.5cm)": 12,
            "1x Panzer IV (short 7.5cm)": 6,
        }
    },
    "T-38 Tank Company" : {
        "Panzer III Tank Platoon": {
            "3x Panzer III (5cm)": 18,
            "2x Panzer III (5cm)": 12,
            "3x Panzer III (7.5cm)": 19,
            "2x Panzer III (7.5cm)": 13
        }
    }
}

//this one is for displaying of formation
const italianNumberedFormationOverrides = {
    "156": {
        "L6/40 Light Tank Company HQ": {
            "4x L6/40 (20mm)": 8,
            "3x L6/40 (20mm)": 6,
            "2x L6/40 (20mm)": 4
        },

        "L6/40 Light Tank Platoon": {
            "5x L6/40 (20mm)": 8,
            "4x L6/40 (20mm)": 6,
            "3x L6/40 (20mm)": 5,
        }
    }
}
const hungarianNumberedFormationOverrides = {
    "536": {
        "Panzer III Tank Platoon": {
            "3x Panzer III (5cm)": 18,
            "2x Panzer III (5cm)": 12,
            "3x Panzer III (7.5cm)": 19,
            "2x Panzer III (7.5cm)": 13
        }
    },
    "537": {
        "Panzer IV Heavy Tank Company HQ": {
            "2x Panzer IV (short 7.5cm)": 12,
            "1x Panzer IV (short 7.5cm)": 6,
        },
        "Panzer IV Tank Platoon": {
            "3x Panzer IV (short 7.5cm)": 18,
            "2x Panzer IV (short 7.5cm)": 12,
            "1x Panzer IV (short 7.5cm)": 6,
        }
    },

}

//these are Command Cards with overridden costs.
const cardOverrides = {
    //this entry stands for both DAK card and Avanti Card.
    // Two separate lines here are present because the card option is called differently in DAK and Avanti
    "Captured 25 pdr Artillery": {
        "Captured 25 pdr Artillery": 2,
        "Command Card Captured 25 pdr Artillery": 2
    }
}
