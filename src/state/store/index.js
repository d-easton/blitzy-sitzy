/*
    Redux store for centralized state management
*/

import {createStore} from "redux";
import rootReducer from "../reducers";

const store = createStore(rootReducer);

export default store;
