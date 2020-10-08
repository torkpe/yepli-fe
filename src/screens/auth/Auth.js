import React from 'react';

import {
  Link
} from 'react-router-dom';
import { connect } from 'react-redux';

import './Auth.scss';

import { AuthForm } from '../../components/forms/Authform';
import { ENUMS } from '../../components/helpers/constants';
import { signin, signup } from '../../actions/auth/actionCreators';
import { validateEmail } from '../../utils/helpers';

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: 'signup',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    }
  }

  changeDisplay =(screen) => {
    this.setState({
      screen
    });
  }

  submit = () => {
    const { screen, firstName, lastName, email, password } = this.state;
    const requiredFields = [];
    const body = {
      firstName, lastName, email, password
    }

    if (screen === ENUMS.signup) {
      if (firstName.length < 2) {
        requiredFields.push('firstName');
      }
      if (lastName.length < 2) {
        requiredFields.push('lastName');
      }
    }

    if (!validateEmail(email)) {
      requiredFields.push('email');
    }
    if (password.length < 5) {
      requiredFields.push('password');
    }


    if (requiredFields.length) {
      console.log('could not go through')
      return this.setState({
        requiredFields
      });
    }

    if (screen === ENUMS.signin) {
      delete body.firstName;
      delete body.lastName;
      this.props.signin(body)
    }

    if (screen === ENUMS.signup) {
      this.props.signup(body)
    }
  }

  componentDidMount() {
    console.log(this.props)
  }
  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  render() {
    const { screen } = this.state;
    return (
      <div className="auth-container">
        <div className="left-side">
          <h1 className='logo'>
            yepli
          </h1>
          <h1 className='heading'>
            Experience the most efficient way of communication.
          </h1>
        </div>
        <div className="right-side">
          <h1 className="title">
            yepli.
          </h1>
          <h4 className='greetings'>
            {screen === ENUMS.signup ?
              'Hey there! Let\'s get started'
              : 'Welcome back. Please login to continue.'
            }
          </h4>
          {
            this.props.message ?
            <div className={this.props.success ? 'auth-success' : 'auth-failure'}>{this.props.message}</div> : ''
          }
          <AuthForm
            submit={this.submit}
            onChange={this.onChange}
            page={screen}
          />
          <div className='links'>
            {screen === ENUMS.signup ?
            <Link to ='' onClick={() => this.changeDisplay(ENUMS.signin)}>Sign in</Link>
            : <Link to='' onClick={() => this.changeDisplay(ENUMS.signup)}>Sign up</Link> } |{' '}
            <Link to=''> Forgot Password</Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.auth)
  return ({
    message: state.auth.message,
    isLoading: state.auth.isLoading,
    success: state.auth.success,
  });
}

const mapDispatchToProps = {
  signin,
  signup
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);
