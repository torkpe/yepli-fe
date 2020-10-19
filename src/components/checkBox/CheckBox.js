import React from 'react';
import CheckBoxImg from '../../assets/svg/check-box.svg';
import './index.scss';

export default function CheckBox(props) {
  if (props.isChecked) {
    return <img src={CheckBoxImg} className="check-box" alt="check-box"/>
  }
  return <div className="check-box uncheck-box"/>
}