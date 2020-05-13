import { SIGN_IN, SIGN_OUT } from './actions';

export const signin = () => (dispatch)=> {
  console.log('gets here')
  return dispatch({
    type: SIGN_IN,
    payload: {
      isAuthenticated: true
    }
  })
}

export const signout = () => (dispatch)=> {
  console.log('gets here too')
  return dispatch({
    type: SIGN_OUT,
    payload: {
      isAuthenticated: false
    }
  })
}