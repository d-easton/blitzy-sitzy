/*
    Redux action function to take a nation out of the game before play begins
*/

import {DEACTIVATE_NATION} from "../constants/action-catalog";

const deactivateNation = (payload) => {
    return {
        type: DEACTIVATE_NATION, payload
    }
}

export default activateNation;