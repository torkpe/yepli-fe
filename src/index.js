import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import setAuthToken from './utils/interceptor';
import { setCurrentUser } from './actions/auth/actionCreators';

const store = configureStore();

const jwt = localStorage.getItem('jwt');

if (jwt) {
  setAuthToken(jwt);
  store.dispatch(setCurrentUser(jwt));
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
