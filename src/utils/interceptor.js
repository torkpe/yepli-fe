import axios from 'axios';

/**
 * @description Set Authentication token for current user
 * 
 * @param {object} token
 * 
 * @return {undefined}
 */
const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common['authorization'] = `${token}`;
  } else {
    delete axios.defaults.headers.common['authorization'];
  }
};
export default setAuthToken;