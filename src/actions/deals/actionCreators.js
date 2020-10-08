import axios from "axios";
import {
  CREATE_DEAL,
  CREATE_DEAL_FAILED,
  CREATE_DEAL_SUCCESSFUL,
  FETCH_DEALS,
  FETCH_DEAL,
  FETCH_DEALS_SUCCESSFUL,
  FETCH_DEAL_SUCCESSFUL,
  FETCH_DEALS_FAILED,
  FETCH_DEAL_FAILED,
} from "./actions";
import { getBaseUrl } from "../../utils/env";

const baseUrl = `${getBaseUrl()}/deals`;

export const createDeal = (payload, props) => async (dispatch) => {
  try {
    dispatch({
      type: CREATE_DEAL,
    });
    const response = await axios.post(`${baseUrl}`, payload);
    dispatch({
      type: CREATE_DEAL_SUCCESSFUL,
      payload: response.data.message
    });
    props.history.push('deals')
  } catch (error) {
    return dispatch({
      type: CREATE_DEAL_FAILED,
    });
  }
};

export const getDeals = (payload) => async (dispatch) => {
  try {
    dispatch({
      type: FETCH_DEALS,
    });
    const response = await axios.get(`${baseUrl}`);
    dispatch({
      type: FETCH_DEALS_SUCCESSFUL,
      payload: response.data.data
    });
  } catch (error) {
    return dispatch({
      type: FETCH_DEALS_FAILED,
    });
  }
};

export const getDeal = (payload) => async (dispatch) => {
  try {
    dispatch({
      type: FETCH_DEAL,
    });
    const response = await axios.get(`${baseUrl}/${payload}`);
    dispatch({
      type: FETCH_DEAL_SUCCESSFUL,
      payload: response.data.data
    });
  } catch (error) {
    return dispatch({
      type: FETCH_DEAL_FAILED,
    });
  }
};

export const addImage= async (formData, dealId) => {
  try {
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }
    const response = await axios.patch(`${baseUrl}/${dealId}/add-image`, formData, config);
    return response.data.data
  } catch (error) {
    console.log(error)
  }
};

export const updateDeal= async (payload, dealId) => {
  try {
    const response = await axios.put(`${baseUrl}/${dealId}`, payload);
    return response.data
  } catch (error) {
    console.log(error)
  }
};
