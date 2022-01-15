import { combineReducers } from 'redux';
import authentication from "./authentication";

const rootReducers = combineReducers(
    {
        auth: authentication
    }
);


export default rootReducers;