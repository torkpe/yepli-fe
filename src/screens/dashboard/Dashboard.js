import React from 'react';
import './index.scss';
import DashboardCard from './DashBoardCard';
import Deals from '../../assets/svg/Deals.svg';
import Templates from '../../assets/svg/Templates.svg';
import Task from '../../assets/svg/Task.svg';

export default class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard-container">
        <div className="big-card">
          <div className="image-container"/>
          <div className="user-details">
            <h1>Welcome Username,</h1>
            <div className="text">
              Welcome to Yepli! This is your home page. You can have a quick view at your deals and create more deals. 
            </div>
          </div>
        </div>
        <div className="cards">
          <DashboardCard
            title="Deals"
            icon={Deals}
            description="Create new deals and update existing deals"
            buttonText="Add Deal +"
          />
          <DashboardCard
            title="Task"
            icon={Task}
            description="Create new task here. It's simple and fun."
            buttonText="Add Deal +"
          />
          <DashboardCard
            title="Deals"
            icon={Templates}
            description="Create new templates."
            buttonText="Add Deal +"
          />
        </div>
      </div>
    )
  }
}