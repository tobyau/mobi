import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';
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
          <Form.Input name="firstName" placeholder='First Name' onChange={this.handleChange}/>
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <Form.Input name="lastName" placeholder='Last Name' onChange={this.handleChange} />
        </Form.Field>
        <Form.Field>
          <label>Username</label>
          <Form.Input name="username" placeholder='Username' onChange={this.handleChange} />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <Form.Input name="password" placeholder='Password' onChange={this.handleChange} />
        </Form.Field>
        <Form.Field>
          <Form.Checkbox label='I agree to the Terms and Conditions' required />
        </Form.Field>

        <Button type='button' as={Link} to="/Home" onClick={this.handleClick}>Submit</Button>

      </Form>
    );
  }
}

export default SignupForm;