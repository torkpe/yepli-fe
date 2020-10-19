import React from 'react';
import './index.scss';

export default function Container(props) {
  return (
    <div className={`content-container ${props.customStyle}`}>
      {props.children}
    </div>
  )
}