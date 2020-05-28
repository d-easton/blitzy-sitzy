/*
    Redux reducer for pawn location manipulation actions
*/


import {MOVE_PAWNS} from "../constants/action-catalog";

const pawnReducer = (state=0, action) => {
    switch(action.type){
        case MOVE_PAWNS:
        default:
            return state;

    }
    return state;
};

export default pawnReducer;