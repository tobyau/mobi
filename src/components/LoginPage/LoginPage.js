import React, { Component } from 'react';
import LoginForm from './LoginForm';
import { Tab } from 'semantic-ui-react';
import SignupForm from './SignupForm';

/*
depending on the action:
    if login is true, display login form
    if signup is true, display signup form 
*/

class LoginPage extends Component{
    render(){
        const panes = [
            { menuItem: 'Login', render: () => <Tab.Pane> <LoginForm /> </Tab.Pane> },
            { menuItem: 'Signup', render: () => <Tab.Pane> <SignupForm /> </Tab.Pane> }
        ]
        return(
            <div>
                <Tab panes={panes} />
            </div>
        );
    }
}

export default LoginPage;