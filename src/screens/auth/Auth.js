import React from 'react';

import {
  Link
} from 'react-router-dom';
import { connect } from 'react-redux';

import './Auth.scss';

import { AuthForm } from '../../components/forms/Authform';
import { ENUMS } from '../../components/helpers/constants';
import { signin } from '../../actions/actionCreators';

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: 'signup'
    }
  }

  changeDisplay =(screen) => {
    this.setState({
      screen
    });
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
          <AuthForm
            submit={this.props.signin}
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

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = {
  signin,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);
