/*
    Redux action function to reset position of all pawns, globally or by nation
*/
import {MOVE_PAWNS} from "../constants/action-catalog";

const resetPawns = (payload) => {
    return {
        type: RESET_PAWNS, payload
    }
}

export default resetPawns;