import React, { Component } from 'react';
import LoginForm from './LoginForm';
//import SignupForm from './SignupForm';
/*
depending on the action:
    if login is true, display login form
    if signup is true, display signup form 
*/

class LoginPage extends Component{
    render(){
        return(
            <div>
                <LoginForm />
                {/* <SignupForm /> */}
            </div>
        );
    }
}

export default LoginPage;