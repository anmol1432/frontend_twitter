import { combineReducers } from 'redux';
import user from "./user";

const rootReducers = combineReducers(
    {
        User: user
    }
);


export default rootReducers;