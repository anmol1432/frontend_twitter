const signIn = 'SIGN_IN'


const SIGN_IN = (title, content, id) => {
    return ({
        type: signIn,
        payload: {
            title,
            content
        }
    })
}
export { SIGN_IN, signIn }