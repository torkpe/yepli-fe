import React from 'react';
import './index.scss';

export default function Image(props) {
  return (
    props.image ?
    <img src={props.image} alt="user-display" className="user-photo"/>
    :
    <div className="user-photo"/>
  )
}