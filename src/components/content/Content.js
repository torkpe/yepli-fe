import React from 'react';
import './index.scss';

export default function Content(props) {
  return (
    <div className={`content ${props.customStyle} ${props.isBigContent ? 'big-content' : ''}`}>
      <div className={`scrollable-content`}>
        {props.children}
      </div>
    </div>
  )
}