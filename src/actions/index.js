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
// create thunk creators 
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

// axios request to database 
// once we get a response , call the action creator using the dispatch method 
//thunkmiddleware , applymiddleware