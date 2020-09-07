import React from 'react';

export default function DashboardCard(props) {
  return (
    <div className="small-card">
      <img
        src={props.icon}
        alt="img"
        className="small-card-img"
      />
      <div className="small-card-left-side">
        <h4>
          {props.title}
        </h4>
        <div>
          {props.description}
        </div>
        <button onClick={() => props.onClick(props.title)}>
          {props.buttonText}
        </button>
      </div>
    </div>
  )
}