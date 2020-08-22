import { combineReducers } from 'redux';
import { auth, verifyEmail } from './auth';

export default combineReducers({
  auth,
  verifyEmail
});
