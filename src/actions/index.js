export const LOGIN = 'LOGIN';
export const SIGNUP = 'SIGNUP'; // add new user 

export const logIn = (username, password) => {
    return {
        type: LOGIN,
        info: {
            username, 
            password, 
        }
    }
}

export const signUp = (first, last, username, password) => {
    return {
        type: SIGNUP,
        info: {
            first,
            last, 
            username, 
            password,
        }
    }
}