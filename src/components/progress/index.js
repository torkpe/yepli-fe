import React from 'react';
import './index.scss';

export default function ProgressBar(props) {
  return (
    <div className="progress-container">
      <div className="progress-bar">
        <div className="progress-level"/>
      </div>
      <div className="percentage">
        21%
      </div>
    </div>
  )
}