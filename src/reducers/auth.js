import * as authActions from '../actions/actions';
const initialState = {
  isAuthenticated: false
}
export function auth (state = initialState, action) {
  switch (action.type) {
    case authActions.SIGN_IN: {
      return {
        ...state,
        isAuthenticated: true
      }
    }
    case authActions.SIGN_OUT: {
      return {
        ...state,
        isAuthenticated: false
      }
    }
    default:
      return state;
  }
}
