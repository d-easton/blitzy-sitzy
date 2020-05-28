/*
    Redux action function to modify a given nation's victory points
*/

import {CHANGE_VP} from "../constants/action-catalog";

const changeVP = (index, newVictoryPointAmount) => {   //payload
    return {
        type: CHANGE_VP,    //payload
        index,
        newVictoryPointAmount
    }
}

export default changeVP;