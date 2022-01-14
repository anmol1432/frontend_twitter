import { signIn } from "../action/user";
export const initialState = {
    sigup: {
        loading: true
    },

}

const user = (state = initialState, action) => {
    switch (action.type) {
        case signIn:
            return {...state, }
        default:
            return state
    }
}


export default user