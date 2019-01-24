import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

/*
Login Form
Asks for username and password
Clicking the login button will trigger an action to send an http request to verify that the inputted credentials match the user in the database
*/

class LoginForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
    }
  }

  handleUsername = (e) => {
    this.setState({username: e.target.value});
  }

  handlePW = (e) => {
    this.setState({password: e.target.value});
  }

  // handleClick = () => {
  //   this.props.onLogin(
  //     this.state.username,
  //     this.state.password
  //   );
  // }

  render(){
    return(
      <Form>
        <Form.Field>
          <label>Username</label>
          <input name='username' placeholder='Username' onChange={this.handleUsername} />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input name='password' placeholder='Password' onChange={this.handlePW}/>
        </Form.Field>
        <Button type='button' as={Link} to="/Home">Login</Button>
      </Form>
    );
  }
}

export default LoginForm;