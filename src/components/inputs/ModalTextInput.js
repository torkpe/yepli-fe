import React from 'react';
import './input.scss';

export default function ModalTextInput(props) {
  return (
    <div className="modal-input-container">
      <label>{props.title}</label>
      <input
        className="modal-input"
        value={props.value}
        name={props.name}
        autoFocus={props.autoFocus}
        onChange={props.onChange}
      />
    </div>
  )
}