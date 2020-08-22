import axios from "axios";

import {
  SIGN_IN,
  SIGN_OUT,
  SIGN_IN_FAILED,
  VERIFY_EMAIL,
  VERIFY_EMAIL_FAILED,
  VERIFY_EMAIL_SUCCESSFUL,
  SET_CURRENT_USER,
  SIGN_IN_SUCCESSFUL,
  SIGN_UP_SUCCESSFUL,
  SIGN_UP_FAILED,
} from "./actions";
import { getBaseUrl } from "../../utils/env";

const baseUrl = `${getBaseUrl()}/auth`;

export const signin = (payload) => async (dispatch) => {
  try {
    dispatch({
      type: SIGN_IN,
    });
    const response = await axios.post(`${baseUrl}/signin`, payload);
    dispatch({
      type: SIGN_IN_SUCCESSFUL,
      payload: response.data.message
    });
    return dispatch({
      type: SET_CURRENT_USER,
      payload: response.data
    })
  } catch (error) {
    console.log(error.response)
    return dispatch({
      type: SIGN_IN_FAILED,
    });
  }
};

export const signup = (payload) => async (dispatch) => {
  try {
    dispatch({
      type: SIGN_IN,
    });
    const response = await axios.post(`${baseUrl}/signup`, payload);
    dispatch({
      type: SIGN_UP_SUCCESSFUL,
      payload: response.data.message
    });
    console.log(response.data);
  } catch (error) {
    return dispatch({
      type: SIGN_UP_FAILED,
      payload: error.response.data.message
    });
  }
};

export const verifyEmail = (payload, history) => async (dispatch) => {
  try {
    dispatch({
      type: VERIFY_EMAIL,
    });
    const response = await axios.get(`${baseUrl}/verify-email?cipher=${payload}`);
    dispatch({
      type: VERIFY_EMAIL_SUCCESSFUL,
      payload: response.data.message
    });
    history.push('/')
    return dispatch({
      type: SET_CURRENT_USER,
      payload: response.data
    })
  } catch (error) {
    return dispatch({
      type: VERIFY_EMAIL_FAILED,
      payload: error.response.data.message
    });
  }
};

export const signout = () => (dispatch) => {
  localStorage.removeItem('jwt')
  return dispatch({
    type: SIGN_OUT,
  });
};

export const setCurrentUser = (payload) => (dispatch) => {
  return dispatch({
    type: SET_CURRENT_USER,
    payload: {
      token: payload
    },
  });
};
