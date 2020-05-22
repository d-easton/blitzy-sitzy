/*
    Redux action function to change position of one or more pawns
*/
import {MOVE_PAWNS} from "../constants/action-catalog";

const movePawns = (payload) => {
    return {
        type: MOVE_PAWNS, payload
    }
}

export default movePawns;