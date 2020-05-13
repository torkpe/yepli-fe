import React from 'react';
import './index.scss'
import home from '../../assets/svg/home.png'
import TaskIcon from '../../assets/svg/my-task.svg';
import Contact from '../../assets/svg/contact.svg';
import MyDeals from '../../assets/svg/My-deals.svg';
import Settings from '../../assets/svg/Settings.svg';
import DashboardItem from './DashboardItem';


export default function Main(props) {
  return (
    <div className='container'>
      <div className="nav-bar">

      </div>
      <div className="side-bar">
        <div className='side-bar-header'>
          <h1 className="logo">
            yepli.
          </h1>
        </div>
        <div className="user-name">
          <div className="user-image">
          </div>
          <h3>User name</h3>
        </div>
        <div className="home">
          <img src={home} className="home-icon" alt='logo'/>
          Home
        </div>
        <div className="dashboard">
          <h3>
            DASHBOARD
          </h3>
          <div className="items">
            <DashboardItem
              title="My Task"
              icon={TaskIcon}
            />
            <DashboardItem
              title="Contacts"
              icon={Contact}
            />
            <DashboardItem
              title="My Deals"
              icon={MyDeals}
            />
            <DashboardItem
              title="Settings"
              icon={Settings}
            />
          </div>
        </div>
      </div>
      <div className="main">
        {props.children}
      </div>
    </div>
  )
} 