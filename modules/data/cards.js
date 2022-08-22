const adjustedOptionPrices = {
    //DAK and Iron Cross
    "Replace any or all Panzer III (short 5cm) with Panzer III (long 5cm) for +2 points each.": 1,
    "Uparmour any or all Panzer III (long 5cm) to Front 6 for +1 point each.": 2,
    "Replace any or all short 5cm with 7.5cm for +3 points each.": 2,
    "Replace any or all Panzer IV (short 7.5cm) with Panzer IV (long 7.5cm) for +4 points each.": 3,

    //ghost panzers
    "Replace up to one Panzer IV (late 7.5cm) with Panzer III (late 7.5cm) for -4 points.": -1,
    "Replace up to two Panzer III (late 5cm) with Panzer IV (late 7.5cm) for +5 points each.": 2,
    "Replace any or all StuG (long 7.5cm) assault guns with StuG (late 7.5cm) (MG251) for +4 points per tank.": 3,

    //red banner
    "Replace up to half of Valentine (late 2 pdr) with Valentine (6 pdr) for +1 point each.": 2,

    //avanti
    "Command Card Captured 6 pdr Anti-tank (with 3 guns)": -1,
    "Command Card Captured 6 pdr Anti-tank (with 2 guns)": -1,

    //hungarian pz4
    "Replace any or all Panzer IV (short 7.5cm) with Panzer IV (long 7.5cm) for +2 points each." : 1,

    //red banner
    "Total T-34 (76mm to replace with T-34/57:": -1,
    "Total T-34 (76mm) to replace with T-34/57:": -1, //for potential future when they fix the typo

    //enemy at the gates
    "up to 10 Panzer III (short 5cm) (MG205)": -1,
    "up to 7 Panzer IV (short 7.5cm) (MG202)": -1,
    "up to 3 StuG (short 7.5cm) (MG221)": -1

}

const customSelectionOptions = {
    "Captured 25 pdr Artillery": {
        "-1 point for a small unit of 2 guns": -1,
        // "+2 points for a unit of 4 guns": 2
    },
    "Always Prepared": {
        "-1 point for a small unit (7 rifle teams & extras)": -1
    },
    "Regulars, By God!": {
        "-2 points for a small unit (4 rifle teams & others)": -2
    }
}