import { SIGN_UP, SIGN_IN } from "../CONSTANT";
import { signIn, signUp } from "../../services/endpoints/authentication";
import { apiProvider } from "../../services/api/provider";

export const initialState = {
    signup: {
        loading: false
    },
    signIn: {
        loading:false
    }
}

const authentication = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_UP:
            apiProvider.post(signUp(), action.payload).then((res) => {
                console.log("res ",res);
            }).catch((error) => console.error( error))
            return {...state}
            case SIGN_IN:
            state.signIn.loading = true
            apiProvider.post(signIn(), action.payload).then((res) => {
                if (res.message) {
                    // console.log(state.signIn.loading , "f" );
                    state.signIn.loading = false
                    // console.log(state.signIn.loading , "l" );
                }
                console.log("res ",res);
            }).catch((error) => console.error( error))
            return {...state} 
        default:
            return state
    }
}


export default authentication