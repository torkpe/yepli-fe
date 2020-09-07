import React from 'react';
import { classes } from '../helpers/constants';

export default function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className={`button ${classes[props.class]} ${props.class}`}>
      {props.text}
    </button>
  )
}