import axios from "axios";
import Login from '../reducers/login'

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

// sign up middleware, sends post request to express server 
export const loginthunk = (username, password) => (dispatch) => {
    axios.post('/api/user', {username, password})
    .then(user => {
        dispatch(Login(user))
    })
}

export const signupthunk = (credentials) => (dispatch) => {
    axios.post('/api/user', credentials)
    .then(user => {
        dispatch(Login(user))
    })
}

// axios request to database 
// once we get a response , call the action creator using the dispatch method 
//thunkmiddleware , applymiddleware