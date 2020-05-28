/*
    Redux action function to modify a given nation's victory points
*/

import {CHANGE_VP} from "../constants/action-catalog";

const changeVP = (payload) => {
    return {
        type: CHANGE_VP, payload
    }
}

export default changeVP;