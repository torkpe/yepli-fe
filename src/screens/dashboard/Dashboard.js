import React from 'react';
import { connect } from 'react-redux';

import './index.scss';
import DashboardCard from './DashBoardCard';
import Deals from '../../assets/svg/Deals.svg';
import Templates from '../../assets/svg/Templates.svg';
import Task from '../../assets/svg/Task.svg';
import { convertFirstLetterToUppercase } from '../../utils/helpers';
import NewDeal from '../../components/deal/NewDeal';

export class Dashboard extends React.Component {
  state = {
    currentDisplay: '',
  }

  onClickAdd = (currentDisplay) => {
    this.setState({
      currentDisplay
    })
  }

  closeModal = () =>
    this.setState({
      currentDisplay: ''
    })

  render() {
    return (
      <React.Fragment>
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
            <div className="card-header">
              <div className="card-header-text">
                Home
              </div>
              <div className="card-header-text">
                Active Deals
              </div>
              <div className="card-header-text">
                Deals Progress
              </div>
            </div>
            <DashboardCard
              title="Deals"
              icon={Deals}
              onClick={this.onClickAdd}
              description="Create new deals and update existing deals"
              buttonText="Add Deal +"
            />
            <DashboardCard
              title="Task"
              icon={Task}
              onClick={this.onClickAdd}
              description="Create new task here. It's simple and fun."
              buttonText="Add Task +"
            />
            <DashboardCard
              title="Deals"
              icon={Templates}
              onClick={this.onClickAdd}
              description="Create new templates."
              buttonText="Create +"
            />
          </div>
        </div>
        <NewDeal
          displayModal={this.state.currentDisplay === 'Deals'}
          closeModal={this.closeModal}
        />
      </React.Fragment>
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