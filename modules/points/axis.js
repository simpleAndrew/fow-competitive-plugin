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
    "2x Breda MG team<br>1x Breda HMG team<br>1x 20mm anti-tank rifle": 5,

    "4x 47mm gun": 6,
    "3x 47mm gun": 4,
    "2x 47mm gun": 2,

    "5x L6/40 (20mm)": 7,
    "4x L6/40 (20mm)": 5,
    "3x L6/40 (20mm)": 4,

    "4x AB41 (20mm)": 4,
    "3x AB41 (20mm)": 3,

    "4x 100mm howitzer": 10,
    "2x 100mm howitzer": 5,
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

const italianNamedFormationOverrides = {
    "L6/40 Light Tank Company Command Card" : {
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

const italianNumberedFormationOverrides = {
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