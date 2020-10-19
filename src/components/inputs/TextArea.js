import React from 'react';
import './input.scss';

export default function TextArea(props) {
  return (
    <div className="modal-input-container text-area custom__modal-input-container">
      <label>{props.title}</label>
      <textarea
        className="text-area-input modal-input"
        value={props.value}
        name={props.name}
        autoFocus={props.autoFocus}
        onChange={props.onChange}
      />
    </div>
  )
}