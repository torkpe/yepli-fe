import * as dealActions from '../actions/deals/actions';

const initialState = {
  isLoading: false,
  message: '',
  deals: [],
  deal: {},
  success: true
}

export function create (state = initialState, action) {
  switch (action.type) {
    case dealActions.CREATE_DEAL: {
      return {
        ...state,
        isLoading: true
      }
    }
    case dealActions.CREATE_DEAL_SUCCESSFUL: {
      return {
        ...state,
        isLoading: false,
        message: action.payload
      }
    }
    case dealActions.CREATE_DEAL_FAILED: {
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

export function getDeals (state = initialState, action) {
  switch (action.type) {
    case dealActions.FETCH_DEALS: {
      return {
        ...state,
        isLoading: true
      }
    }
    case dealActions.FETCH_DEALS_SUCCESSFUL: {
      return {
        ...state,
        isLoading: false,
        deals: action.payload
      }
    }
    case dealActions.FETCH_DEALS_FAILED: {
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

export function getDeal (state = initialState, action) {
  switch (action.type) {
    case dealActions.FETCH_DEAL: {
      return {
        ...state,
        isLoading: true
      }
    }
    case dealActions.FETCH_DEAL_SUCCESSFUL: {
      return {
        ...state,
        isLoading: false,
        deal: action.payload
      }
    }
    case dealActions.FETCH_DEAL_FAILED: {
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