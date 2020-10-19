import React from 'react';
import './input.scss';


export const INPUT_TYPES = {
  text: 'text',
  password: 'password'
}
export default function CustomTextInput(props) {
  return (
    <div className="modal-input-container custom__modal-input-container">
      <label>{props.title}</label>
      <input
        type={props.type ? props.type : INPUT_TYPES.text}
        className="modal-input"
        value={props.value}
        name={props.name}
        disabled={props.disabled}
        autoFocus={props.autoFocus}
        onChange={props.onChange}
      />
    </div>
  )
}