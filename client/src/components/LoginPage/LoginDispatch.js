import { connect } from 'react-redux';
import { loginthunk } from '../../actions';
import LoginForm from './LoginForm';

const mapStateToProps = state => {
    return {
      username: state.username,
      password: state.password
    };
  };

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      onLogin: (username, password) => dispatch(loginthunk(username, password)),
    };
  };

const LoginDispatch = connect(mapStateToProps, mapDispatchToProps)(LoginForm);


export default LoginDispatch;