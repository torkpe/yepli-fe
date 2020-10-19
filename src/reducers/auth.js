import * as authActions from '../actions/auth/actions';
import jsonwebtoken from 'jsonwebtoken';

const initialState = {
  isAuthenticated: false,
  isLoading: false,
  message: '',
  success: true
}

export function auth (state = initialState, action) {
  switch (action.type) {
    case authActions.SIGN_IN: {
      return {
        ...state,
        isLoading: true
      }
    }
    case authActions.SIGN_IN_SUCCESSFUL: {
      return {
        ...state,
        isLoading: false,
        success: true
      }
    }
    case authActions.SIGN_UP_SUCCESSFUL: {
      return {
        ...state,
        isLoading: false,
        message: action.payload,
        success: true
      }
    }
    case authActions.SIGN_IN_FAILED: {
      return {
        ...state,
        isLoading: false,
        success: false
      }
    }
    case authActions.SIGN_UP_FAILED: {
      return {
        ...state,
        isLoading: false,
        message: action.payload,
        success: false
      }
    }
    case authActions.SIGN_OUT: {
      return {
        ...state,
        isAuthenticated: false,
        user: {}
      }
    }
    case authActions.SET_CURRENT_USER: {
      localStorage.setItem('jwt', action.payload.token);
      return {
        ...state,
        isAuthenticated: true,
        user: jsonwebtoken.decode(action.payload.token)
      }
    }
    default:
      return state;
  }
}

export function verifyEmail (state = initialState, action) {
  switch (action.type) {
    case authActions.VERIFY_EMAIL: {
      return {
        ...state,
        isLoading: true
      }
    }
    case authActions.VERIFY_EMAIL_SUCCESSFUL: {
      return {
        ...state,
        isLoading: false,
        message: action.payload
      }
    }
    case authActions.VERIFY_EMAIL_FAILED: {
      return {
        ...state,
        isLoading: false,
        message: action.payload
      }
    }
    default:
      return state;
  }
}