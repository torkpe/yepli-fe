const baseUrl = 'http://localhost:4020/api/v1';
const prodBaseUrl = 'https://yepli.herokuapp.com/api/v1';

export function getBaseUrl () {
  const env = 'prod';
  if (env === 'dev') {
    return baseUrl;
  }
  return prodBaseUrl;
}