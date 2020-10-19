import axios from "axios";
import { getBaseUrl } from "../../utils/env";
import {
  UPLOAD_USER_IMAGE_SUCCESSFUL,
  UPLOAD_USER_IMAGE,
  UPLOAD_USER_IMAGE_FAILED,
  UPDATE_USER,
  UPDATE_USER_SUCCESSFUL,
  UPDATE_USER_FAILED,
} from "./actions";
import { SET_CURRENT_USER } from "../auth/actions";

const baseUrl = `${getBaseUrl()}/users`;

export const addImage = (formData) => async (dispatch) => {
  try {
    dispatch({
      type: UPLOAD_USER_IMAGE,
    });
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    const response = await axios.patch(
      `${baseUrl}/update-image`,
      formData,
      config
    );
    dispatch({
      type: SET_CURRENT_USER,
      payload: {
        token: response.data.data,
      },
    });
    return dispatch({
      type: UPLOAD_USER_IMAGE_SUCCESSFUL,
    });
  } catch (error) {
    return dispatch({
      type: UPLOAD_USER_IMAGE_FAILED,
    });
  }
};

export const getUserDetails = async () => {
  try {
    const response = await axios.get(`${baseUrl}`);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateUserDetails = (payload) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_USER,
    });
    const response = await axios.patch(`${baseUrl}`, payload);
    dispatch({
      type: SET_CURRENT_USER,
      payload: {
        token: response.data.data,
      },
    });
    return dispatch({
      type: UPDATE_USER_SUCCESSFUL,
    });
  } catch (error) {
    return dispatch({
      type: UPDATE_USER_FAILED,
    });
  }
};


export const updatePassword = async(payload) => {
  const response = await axios.patch(`${baseUrl}/update-password`, payload);
  return response.data
};
