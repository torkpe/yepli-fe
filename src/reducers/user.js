import * as userActions from '../actions/user/actions';

const initialState = {
  isLoading: false,
  message: '',
  success: true
}

export function user (state = initialState, action) {
  switch (action.type) {
    case userActions.UPLOAD_USER_IMAGE: {
      return {
        ...state,
        isLoading: true
      }
    }
    case userActions.UPLOAD_USER_IMAGE_SUCCESSFUL: {
      return {
        ...state,
        isLoading: true
      }
    }
    case userActions.UPLOAD_USER_IMAGE_FAILED: {
      return {
        ...state,
        isLoading: true
      }
    }
    case userActions.UPDATE_USER: {
      return {
        ...state,
        isLoading: true
      }
    }
    case userActions.UPDATE_USER_FAILED: {
      return {
        ...state,
        isLoading: true
      }
    }
    case userActions.UPDATE_USER_SUCCESSFUL: {
      return {
        ...state,
        isLoading: true
      }
    }
    default:
      return state;
  }
}
