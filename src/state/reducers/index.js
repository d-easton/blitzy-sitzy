import pawnReducer from './pawn-reducer';
import nationSelectReducer from './nation-select-reducer';
import {combinedReducers} from 'redux';

const rootReducer = combinedReducers({
    pawnReducer,
    nationSelectReducer
});

export default rootReducer;