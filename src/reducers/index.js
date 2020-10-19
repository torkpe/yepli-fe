import { combineReducers } from 'redux';
import { auth, verifyEmail } from './auth';
import * as deals from './deals';
import * as user from './user';

export default combineReducers({
  auth,
  verifyEmail,
  ...deals,
  ...user
});
