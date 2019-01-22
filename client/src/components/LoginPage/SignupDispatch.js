import { connect } from 'react-redux';
import { signUp } from '../../actions';
import SignupForm from './SignupForm';

const mapStateToProps = state => {
    return {
      firstName: state.firstName,
      lastName: state.lastName,
      username: state.username,
      password: state.password
    };
  };

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      onSignup: (first, last, username, password) => dispatch(signUp(first, last, username, password)),
    };
  };

const SignupDispatch = connect(mapStateToProps, mapDispatchToProps)(SignupForm);


export default SignupDispatch;