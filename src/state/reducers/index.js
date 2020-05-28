import pawnReducer from './pawn-reducer';
import nationSelectReducer from './nation-select-reducer';
import nationReducer from './nation-reducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    pawnReducer,
    nationSelectReducer
});

export default rootReducer;