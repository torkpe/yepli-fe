import React from 'react';
import './input.scss';
export default function TextInput(props) {
  return (
    <div className='form-input'>
      {props.icon ? <img src={props.icon} className='input-icon' alt='img'/> : ''}
      <input
        className='text-input'
        placeholder={props.placeholder}
      />
    </div>
  )
}