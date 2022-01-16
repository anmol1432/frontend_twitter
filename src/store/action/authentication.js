const signIn = 'SIGN_IN'


const SIGN_UP = ({userName,email, phoneNumber,password,confirmPassword}) => {
    return ({
        type: signIn,
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
    SIGN_UP,signIn
}