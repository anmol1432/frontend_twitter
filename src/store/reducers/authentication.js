import { signIn } from "../action/authentication";
import { SIGN_IN } from "../../services/endpoints/authentication";

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
        case signIn:
            
            return {...state }
        default:
            return state
    }
}


export default authentication