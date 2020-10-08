import moment from 'moment';

export const validateEmail = (email) => {
  let emailRegex = /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/;
  return emailRegex.test(String(email).toLowerCase());
}


export function convertFirstLetterToUppercase(word) {
  return word.replace(/(\b[a-z](?!\s))/g, function(x){return x.toUpperCase();});
}

export function convertDate(date) {
  return date ? moment(date).toString().split(' ').slice(0, 4).join(' ') : '';
}

export const formatNumber = (num) => {
  return ('' + num).replace(
    /(\d)(?=(?:\d{3})+(?:\.|$))|(\.\d\d?)\d*$/g, 
    function(m, s1, s2){
      return s2 || (s1 + ',');
    }
  );
}
