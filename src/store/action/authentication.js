import { SIGN_IN } from "../CONSTANT";


const SIGN_UP = ({userName,email, phoneNumber,password,confirmPassword}) => {
    return ({
        type: SIGN_IN,
        payload: {
            userName,
            email,
            phoneNumber,
            password,
            confirmPassword
        }
    })
}


export {
    SIGN_UP
}