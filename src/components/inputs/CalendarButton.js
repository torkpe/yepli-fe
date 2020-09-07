import React from 'react';
import './input.scss';

export default function CalendarButton (props) {
  return (
    <div className="modal-input-container">
      <label>{props.title}</label>
      <input
        type="button"
        onClick={props.onClick}
        className="modal-input modal-input__button"
        value={props.value}
      />
    </div>
  )
}