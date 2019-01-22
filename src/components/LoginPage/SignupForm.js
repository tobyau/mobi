import React, { Component } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class SignupForm extends Component {
  // also need to input user information into database 
  constructor(props) {
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

  handleClick = (e) => {
    this.props.onSignup(
      this.state.firstName,
      this.state.lastName,
      this.state.username,
      this.state.password
    );
    this.setState({ firstName: '', lastName: '', username: '', password: '' });
  }

  render() {
    return (
      <Form>
        <Form.Field>
          <label>First Name</label>
          <input name="firstName" placeholder='First Name' onChange={this.handleChange} />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input name="lastName" placeholder='Last Name' onChange={this.handleChange} />
        </Form.Field>
        <Form.Field>
          <label>Username</label>
          <input name="username" placeholder='Username' onChange={this.handleChange} />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input name="password" placeholder='Password' onChange={this.handleChange} />
        </Form.Field>
        <Form.Field>
          <Checkbox label='I agree to the Terms and Conditions' />
        </Form.Field>

        <Button type='button' as={Link} to="/Home" onClick={this.handleClick}>Submit</Button>

      </Form>
    );
  }
}

export default SignupForm;