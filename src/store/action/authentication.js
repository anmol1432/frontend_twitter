const signIn = 'SIGN_IN'


const SIGN_IN = (name,email, phoneNumber,passowrd,confirmPassword) => {
    return ({
        type: signIn,
        payload: {
            name,
            email,
            phoneNumber,
            passowrd,
            confirmPassword
        }
    })
}


export {
    SIGN_IN,
    signIn
}