import axios from "axios";
import { getBaseUrl } from "../../utils/env";

const baseUrl = `${getBaseUrl()}/contacts`;

export const getContacts = async () => {
  try {
    const response = await axios.get(`${baseUrl}`);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};

export const postContact = async (payload) => {
  try {
    const response = await axios.post(`${baseUrl}`, payload);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};