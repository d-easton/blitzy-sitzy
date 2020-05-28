/*
    Redux reducer for nation manipulation actions
*/

import {CHANGE_VP} from "../constants/action-catalog";

const initialState = {
    nations: [
        {
           id: "DE",
           victory_points: 0
        },
        {
            id: "GB",
            victory_points: 0
        },
        {
            id: "RUS",
            victory_points: 0
        },
        {
            id: "FR",
            victory_points: 0
        }
    ]
}

const nationReducer = (state=initialState, action) => {
    switch(action.type){
        case CHANGE_VP:
            let x = -1;    
            if(action.nationID =="DE") {x=0}


            return Object.assign({}, state, {
                nations: state.nations.map((nation, index)=> {
                    if (index == action.index) {
                        return Object.assign({}, nation, {
                            victory_points: action.newVictoryPointAmount
                        })
                    }
                    return nation
                })
            })
        default:
            return state;

    }
    return state;
};

export default nationReducer;