import React from 'react';

export default function DashboardItem(props) {
  return (
    <div className="item">
      <img src={props.icon} className="item-image" alt="img"/>
      {props.title}
    </div>
  )
}
