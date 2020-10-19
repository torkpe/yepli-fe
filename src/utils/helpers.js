import moment from 'moment';
import TaskIcon from '../assets/svg/my-task.svg';
import Contact from '../assets/svg/contact.svg';
import MyDeals from '../assets/svg/My-deals.svg';
import Settings from '../assets/svg/Settings.svg';
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

export function returnOnlyFirstLettersOfEachWord(word) {
  if (word) {
    word = convertFirstLetterToUppercase(word);
    const splitWord = word.split(' ');
    if (splitWord[1]) {
      return `${splitWord[0].charAt(0).toUpperCase()} ${splitWord[1].charAt(0).toUpperCase()}`;
    }
    return `${splitWord[0].charAt(0).toUpperCase()}`;
  }
}

export const routeLinks = [
  {
    title: "My Tasks",
    to: "tasks",
    icon: TaskIcon
  },
  {
    title: "Contacts",
    to: "contacts",
    icon: Contact
  },
  {
    title: "My Deals",
    to: "deals",
    icon: MyDeals
  },
  {
    title: "Settings",
    to: "settings",
    icon: Settings
  },
]