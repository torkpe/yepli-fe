import axios from "axios";
import {
  CREATE_DEAL,
  CREATE_DEAL_FAILED,
  CREATE_DEAL_SUCCESSFUL
} from "./actions";
import { getBaseUrl } from "../../utils/env";

const baseUrl = `${getBaseUrl()}/deals`;

export const createDeal = (payload) => async (dispatch) => {
  try {
    dispatch({
      type: CREATE_DEAL,
    });
    const response = await axios.post(`${baseUrl}`, payload);
    dispatch({
      type: CREATE_DEAL_SUCCESSFUL,
      payload: response.data.message
    });
  } catch (error) {
    console.log(error.response)
    return dispatch({
      type: CREATE_DEAL_FAILED,
    });
  }
};
