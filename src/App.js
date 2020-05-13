import React from 'react';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';

import {
  BrowserRouter as Router,
  // Switch,
  Route
} from 'react-router-dom';

import configureStore from './store';

import Auth from './screens/auth/Auth';
import Main from './components/Main';
import Dashboard from './screens/dashboard/Dashboard';

const store = configureStore();


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
              <Route path='/' component={Auth}/>
              <Route path='/signin' component={Auth}/>
            </React.Fragment>
          :
              <Main>
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
