import { SIGN_UP } from "../CONSTANT";


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


export {
    signUp
}