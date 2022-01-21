import { SIGN_IN } from "../CONSTANT";
import { signIn } from "../../services/endpoints/authentication";
import {  } from "../../services/api/index";

export const initialState = {
    signup: {
        loading: true
    },
    signIn: {
        loading:true
    }
}

const authentication = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN:

            return {...state }
        default:
            return state
    }
}


export default authentication