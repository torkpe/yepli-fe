import React from 'react';

import { connect } from 'react-redux';

import './Auth.scss';

import { verifyEmail } from '../../actions/auth/actionCreators';

class VerifyEmail extends React.Component {
  componentDidMount() {
    const cipher = this.props.location.search ? this.props.location.search.split('=').pop() : ''
    if (cipher) {
      this.props.verifyEmail(cipher, this.props.history);
    }
  }

  render() {
    return (
      <div className="auth-container auth-container__verify-email">
        {
          this.props.isLoading ?
            <div>
              Loading...
            </div>
          : <h3>
              {this.props.message}
            </h3>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.verifyEmail.isLoading,
  message: state.verifyEmail.message
});

const mapDispatchToProps = {
  verifyEmail,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VerifyEmail);
