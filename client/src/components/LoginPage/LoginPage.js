import React, { Component } from 'react';
import LoginDispatch from './LoginDispatch';
import { Tab } from 'semantic-ui-react';
import SignupDispatch from './SignupDispatch';
import './LoginPage.css'

/*
Contains the login and sign up form
*/

class LoginPage extends Component{
    render(){
        const panes = [
            { menuItem: 'Login', render: () => <Tab.Pane className="tabpane"> <LoginDispatch /> </Tab.Pane> },
            { menuItem: 'Signup', render: () => <Tab.Pane className="tabpane"> <SignupDispatch /> </Tab.Pane> }
        ]
        return(
            <div className="forms">
                <Tab className="tab" panes={panes}/>
            </div>
        );
    }
}

export default LoginPage;