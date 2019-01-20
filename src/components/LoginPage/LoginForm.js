import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
//import { LOGIN } from '../actions';


class LoginForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      login: false,
    }
  }

  handleUsername = (e) => {
    this.setState({username: e.target.value});
  }

  handlePW = (e) => {
    this.setState({password: e.target.value});
  }

  handleClick = () => {
    this.setState({login: true});
  }

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
        <Button type='button' as={Link} to="/Home" onClick={this.handleClick}>Login</Button>
      </Form>
    );
  }
}

export default LoginForm;