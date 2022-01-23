import { SIGN_UP, SIGN_IN } from "../CONSTANT";


const signUp = ({name,email, phone,password,confirmPassword}) => {
    return ({
        type: SIGN_UP,
        payload: {
            name,
            email,
            phone,
            password,
            confirmPassword
        }
    })
}

const signIn = ({email,password}) => {
    return ({
        type: SIGN_IN,
        payload: {
            email,
            password
        }
    })
}


export {
    signUp,
    signIn
}