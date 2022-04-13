import {createStore, combineReducers, applyMiddleware} from "redux";
import authReducers from "./Auth/authReducers";
import thunk from "redux-thunk";
import userReducers from "./User/userReducer";

const rootReducer = combineReducers({authReducers, userReducers});

export const store = createStore(rootReducer, applyMiddleware(thunk));
