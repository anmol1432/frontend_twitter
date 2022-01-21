import { SIGN_UP } from "../CONSTANT";
import { signIn } from "../../services/endpoints/authentication";
import { apiProvider } from "../../services/api/provider";

export const initialState = {
    signup: {
        loading: false
    },
    signIn: {
        loading:true
    }
}

const authentication = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_UP:
            apiProvider.post(signIn(), action.payload).then((res) => {
                console.log("res ",res);
            }).catch((error) => console.error( error))
            return {...state}
        default:
            return state
    }
}


export default authentication