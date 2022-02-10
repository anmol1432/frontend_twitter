import { SIGN_UP, SIGN_IN } from "../CONSTANT";
import { signIn, signUp } from "../../services/endpoints/authentication";
import { apiProvider } from "../../services/api/provider";

export const initialState = {
    signup: {
        loading: false
    },
    signIn: {
        loading: false
    }
}

const authentication = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_UP:
            apiProvider.post(signUp(), action.payload).then((res) => {

            }).catch((error) => console.error(error))
            return { ...state }
        case SIGN_IN:
            apiProvider.post(signIn(), action.payload).then((res) => {
                state.signIn.loading = true
                if (res.message == "Success") {
                    localStorage.setItem('token', res.data.jwt)
                    window.location.href = '/home'
                    return {
                        ...state,
                        signIn: {
                            loading: false
                        }
                    }
                }
                return { ...state }
            }
            ).catch((error) => console.error(error))
        default:
            return state
    }
}


export default authentication