import { LOGIN, /*SIGNUP*/ } from '../actions';

const initialState = {
    user: [],
    login: false,
    //signup: false
}

const Login = (state = initialState, action) => {
    const newState = {...state};
    let array = [...newState.user];
    switch (action.type) {
        // pushes new user into user array
        // also want to add user to database 
        /*
        case SIGNUP:
            array.push(action.info);
            newState.user = array;
            return newState; */
        // finds user and sets user array to single user
        // sets login to true 
        case LOGIN:
            array = array.filter((element) => element.username === action.username);
            newState.user = array;
            newState.login = true;
            return newState;
        default: 
            return state;
    }
}

export default Login;