import React from 'react';
import { connect } from 'react-redux';

import {
  BrowserRouter as Router,
  // Switch,
  Route
} from 'react-router-dom';

import Auth from './screens/auth/Auth';
import Main from './components/Main';
import Dashboard from './screens/dashboard/Dashboard';
import VerifyEmail from './screens/auth/VerifyEmail';

class App extends React.Component {
  state = {
    isAuthenticated: false
  }
  render() {
    const { isAuthenticated } = this.props;
    console.log(isAuthenticated)
    return (
      <Router>
        {/* <Provider store={store}> */}
        {
          !isAuthenticated ? 
            <React.Fragment>
              <Route path='/' exact component={Auth}/>
              <Route path='/verify-email' component={VerifyEmail}/>
            </React.Fragment>
          :
              <Main props={this.props}>
                <Route path='/' component={Dashboard}/>
              </Main>
        }
        {/* </Provider> */}
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    isAuthenticated: state.auth.isAuthenticated
});
}
export default connect(mapStateToProps)(App)
