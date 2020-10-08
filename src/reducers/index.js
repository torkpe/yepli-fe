import { combineReducers } from 'redux';
import { auth, verifyEmail } from './auth';
import * as deals from './deals';

export default combineReducers({
  auth,
  verifyEmail,
  ...deals
});
