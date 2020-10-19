import React from 'react';
import { connect } from 'react-redux';

import {
  BrowserRouter as Router,
  // Switch,
  Route,
} from 'react-router-dom';

import Auth from './screens/auth/Auth';
import Main from './components/Main';
import Dashboard from './screens/dashboard/Dashboard';
import VerifyEmail from './screens/auth/VerifyEmail';
import Deals from './screens/deal/Deals';
import Deal from './screens/deal/Deal';
import Tasks from './screens/tasks/Tasks';
import Settings from './screens/settings/Settings';
import Profile from './screens/profile/Profile';
import Contacts from './screens/contacts/Contacts';

class App extends React.Component {
  state = {
    isAuthenticated: false
  }

  navigate = () => {
    this.props.history.push();
  }
  render() {
    const { isAuthenticated } = this.props;
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
                <React.Fragment>
                  {/* <Route exact path='/' component={Main}/> */}
                  <Route exact path='/' component={Dashboard}/>
                  <Route exact path='/deals' component={Deals}/>
                  <Route path='/deals/:dealId' component={Deal}/>
                  <Route path='/tasks' component={Tasks}/>
                  <Route path='/settings' component={Settings}/>
                  <Route path='/profile' component={Profile}/>
                  <Route path='/contacts' component={Contacts}/>
                </React.Fragment>
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
