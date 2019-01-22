import React, { Component } from 'react';
import LoginForm from './LoginForm';
import { Tab } from 'semantic-ui-react';
import SignupDispatch from './SignupDispatch';
import './LoginPage.css'

/*
depending on the action:
    if login is true, display login form
    if signup is true, display signup form 
*/

class LoginPage extends Component{
    render(){
        const panes = [
            { menuItem: 'Login', render: () => <Tab.Pane className="tabpane"> <LoginForm /> </Tab.Pane> },
            { menuItem: 'Signup', render: () => <Tab.Pane className="tabpane"> <SignupDispatch /> </Tab.Pane> }
        ]
        return(
            <div className="forms">
                <Tab panes={panes}/>
            </div>
        );
    }
}

export default LoginPage;