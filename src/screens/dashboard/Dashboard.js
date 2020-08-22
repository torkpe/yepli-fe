import React from 'react';
import { connect } from 'react-redux';

import './index.scss';
import DashboardCard from './DashBoardCard';
import Deals from '../../assets/svg/Deals.svg';
import Templates from '../../assets/svg/Templates.svg';
import Task from '../../assets/svg/Task.svg';
import { convertFirstLetterToUppercase } from '../../utils/helpers';

export class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard-container">
        <div className="big-card">
          <div className="image-container"/>
          <div className="user-details">
            <h1>Hi {convertFirstLetterToUppercase(this.props.user.firstName)},</h1>
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
            buttonText="Add Task +"
          />
          <DashboardCard
            title="Deals"
            icon={Templates}
            description="Create new templates."
            buttonText="Create +"
          />
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return({
    user: state.auth.user
  });
}
// const mapDispatchToProps = {

// }

export default connect(
  mapStateToProps,
  undefined
)(Dashboard);