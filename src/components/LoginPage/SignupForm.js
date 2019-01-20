import React, { Component } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

class SignupForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      username: '',
      password: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render(){
    return(
      <Form>
        <Form.Field>
          <label>First Name</label>
          <input name="firstName" placeholder='First Name' onChange={this.handleChange}/>
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input name="lastName" placeholder='Last Name' onChange={this.handleChange}/>
        </Form.Field>
        <Form.Field>
          <label>Username</label>
          <input name="username" placeholder='Username' onChange={this.handleChange}/>
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input name="password" placeholder='Password' onChange={this.handleChange}/>
        </Form.Field>
        <Form.Field>
          <Checkbox label='I agree to the Terms and Conditions' />
        </Form.Field>
        <Button type='submit' onClick={this.handleClick} as={NavLink} to="/Home">Submit</Button>
      </Form>
    );
  }
}

export default SignupForm;