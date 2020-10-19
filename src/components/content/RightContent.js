import React from 'react';
import './index.scss';

export default function RightContent(props) {
  return (
    <div className="right-content-container">
      <div className="right-content">
        {props.children}
      </div>
    </div>
  )
}