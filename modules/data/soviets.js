const soviets = {
    //empty after refactoring
}

const namedSoviet = {

    "M3 Lee Tank Company": {
        "10x M3 Lee (short 75mm)": 40,
        "9x M3 Lee (short 75mm)": 36,
        "8x M3 Lee (short 75mm)": 32,
        "7x M3 Lee (short 75mm)": 28,
        "6x M3 Lee (short 75mm)": 24,
        "5x M3 Lee (short 75mm)": 20,
        "4x M3 Lee (short 75mm)": 16,
        "3x M3 Lee (short 75mm)": 12
    },

    "SU-152 Heavy SP Battery": {
        "2x SU-152 (152mm)": 14
    },

    "SU-85 Tank-killer Battery" : {
        "4x SU-85 (85mm)": 29,
        "3x SU-85 (85mm)": 22,
        "2x SU-85 (85mm)": 15
    },

    "SU-122 Medium SP Battery" : {
        "4x SU-122 (122mm)": 18,
        "3x SU-122 (122mm)": 14,
        "2x SU-122 (122mm)": 9,
    },

    "OT-34 Flame-tank Company": {
        "10x OT-34 (76mm)": 40,
        "9x OT-34 (76mm)": 36,
        "8x OT-34 (76mm)": 32,
        "7x OT-34 (76mm)": 28,
        "6x OT-34 (76mm)": 24,
        "5x OT-34 (76mm)": 20,
        "4x OT-34 (76mm)": 16,
        "3x OT-34 (76mm)": 12
    },

    "T-34 (Early) Tank Battalion HQ": {
        "1x T-34 (76mm)": 4
    },

    "T-34 (Early) Tank Company": {
        "10x T-34 (76mm)": 40,
        "9x T-34 (76mm)": 36,
        "8x T-34 (76mm)": 32,
        "7x T-34 (76mm)": 28,
        "6x T-34 (76mm)": 24,
        "5x T-34 (76mm)": 20,
        "4x T-34 (76mm)": 16,
        "3x T-34 (76mm)": 12
    },

    "T-34 Tank Battalion HQ": {
        "1x T-34 (76mm)": 4
    },

    "T-34 Tank Company": {
        "10x T-34 (76mm)": 45,
        "9x T-34 (76mm)": 40,
        "8x T-34 (76mm)": 35,
        "7x T-34 (76mm)": 30,
        "6x T-34 (76mm)": 25,
        "5x T-34 (76mm)": 21,
        "4x T-34 (76mm)": 17,
        "3x T-34 (76mm)": 13
    },

    "T-34 Hero Tank Battalion HQ": {
        "1x T-34 (76mm)": 6
    },

    "T-34 Hero Tank Company": {
        "3x T-34 (76mm)": 17
    },

    "Rifle Company": {
        "28x DP MG and M1891 rifle team<br>1x Komissar team": 18,
        "19x DP MG and M1891 rifle team<br>1x Komissar team": 12
    },

    "Penal Company": {
        "28x M1891 rifle team<br>1x Komissar team": 17,
        "19x M1891 rifle team<br>1x Komissar team": 11,
    },

    "Motor Rifle Company": {
        "28x DP MG &amp; M1891 rifle team<br>1 Komissar team": 22,
        "19x DP MG &amp; M1891 rifle team<br>1 Komissar team": 15
    },

    "SMG Company": {
        "22x PPSh SMG team<br>1x Komissar team": 17,
        "15x PPSh SMG team<br>1x Komissar team": 12
    },

    "Storm Group": {
        "7x PPSh SMG team<br>2x Maksim HMG team<br>1x PTRD AT rifle team<br>1x 50mm mortar team": 16,
        "5x PPSh SMG team<br>2x Maksim HMG team<br>1x PTRD AT rifle team<br>1x 50mm mortar team": 13
    },

    "Reconnaissance Platoon": {
        "4x Recce DP MG taem<br>1x Flame-thrower team": 6,
        "4x Recce DP MG team": 4
    },

    "Armoured Reconnaissance Platoon": {
        "6x PPSh SMG team<br>3x M3 Scout transport (.50 cal MG) (MS156)": 7,
        "4x PPSh SMG team<br>2x M3 Scout transport (.50 cal MG) (MS156)": 5,
        "6x PPSh SMG team<br>3x Sd Kfz 251 transport (MG) (MS162)": 7,
        "4x PPSh SMG team<br>2x Sd Kfz 251 transport (MG) (MS162)": 5,
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

    "KV-1s Tank Company": {
        "5x KV-1s (76mm)": 33,
        "4x KV-1s (76mm)": 26,
        "3x KV-1s (76mm)": 19
    },

    "Reconnaissance by Combat": {
        "Command Card Reconnaissance by Combat": 3
    },

    "Reconnaissance By Combat": {
        "Command Card Reconnaissance by Combat": 3
    },

    "BA-10 Armoured Car Company": {
        "1x BA-10 (45mm)": 3
    },

    "SU-152 Medium SP Regiment": {
        "1x KV-1s (76mm)": 8
    },

    "SU-85 Medium SP Regiment": {
        "1x T-34 (76mm)": 4
    },

    "SU-122 Medium SP Regiment": {
        "1x T-34 (76mm)": 4
    },

    "Light Tank-killer Company": {
        "4x Short 45mm gun": 9,
        "2x Short 45mm gun": 4,

        "4x Long 45mm gun": 11,
        "2x Long 45mm gun": 5
    },

    "Heavy Tank-killer Company": {
        "4x 76mm gun": 13,
        "2x 76mm gun": 7
    },
}

const sovietNamedFormationOverrides = {
    "BA-10 Armoured Car Company Command Card": {
        "BA-10 Armoured Car Platoon": {
            "3x BA-10 (45mm)": 3
        }
    }
}

const sovietUnitCardOverrides = {
    "MS128": {
        "3x BA-10 (45mm)": 3
    }
}

const sovietFormationIdOverrides = {
    //Red Banner Formation Support
    "194": {
        "BA-10 Armoured Car Platoon": {
            "3x BA-10 (45mm)": 3
        }
    },
    //Command card
    "214":{
        "BA-10 Armoured Car Platoon": {
            "3x BA-10 (45mm)": 3
        }
    },
    //Enemy at the gates Formation Support
    "129":{
        "BA-10 Armoured Car Platoon": {
            "3x BA-10 (45mm)": 3
        }
    }
}