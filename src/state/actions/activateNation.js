/*
    Redux action function to bring a nation into the game before play begins
*/

import {ACTIVATE_NATION} from "../constants/action-catalog";

const activateNation = (payload) => {
    return {
        type: ACTIVATE_NATION, payload
    }
}

export default activateNation;