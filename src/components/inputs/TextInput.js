import React from 'react';
import './input.scss';
import { INPUT_TYPES } from '../helpers/constants';
export default function TextInput(props) {
  return (
    <React.Fragment>
      <div className="form-title">{props.title}</div>
      <div className='form-input'>
        {props.icon ? <img src={props.icon} className='input-icon' alt='img'/> : ''}
        <input
          className='text-input'
          onChange={props.onChange}
          name={props.name}
          type={props.type ? props.type : INPUT_TYPES.text}
          placeholder={props.placeholder}
        />
      </div>
    </React.Fragment>
  )
}