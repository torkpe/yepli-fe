import React from 'react';
import {Link} from 'react-router-dom';

export default function DashboardItem(props) {
  return (
    <Link onClick={props.toggleSideNav} to={'/'+ props.to} className="item">
      <img src={props.icon} className="item-image" alt="img"/>
      {props.title}
    </Link>
  )
}
