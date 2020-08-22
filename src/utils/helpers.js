export const validateEmail = (email) => {
  let emailRegex = /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/;
  return emailRegex.test(String(email).toLowerCase());
}


export function convertFirstLetterToUppercase(word) {
  return word.replace(/(\b[a-z](?!\s))/g, function(x){return x.toUpperCase();});
} 