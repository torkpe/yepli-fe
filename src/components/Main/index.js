import React from 'react';
import { connect } from 'react-redux';

import './index.scss'
import home from '../../assets/svg/home.png'
import TaskIcon from '../../assets/svg/my-task.svg';
import Contact from '../../assets/svg/contact.svg';
import MyDeals from '../../assets/svg/My-deals.svg';
import Settings from '../../assets/svg/Settings.svg';
import DashboardItem from './DashboardItem';
import { signout } from '../../actions/auth/actionCreators';
import { convertFirstLetterToUppercase } from '../../utils/helpers';

export function Main(props) {
  const signoutUser = () => {
    props.signout();
  }
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
          <h3>{convertFirstLetterToUppercase(props.user.firstName)} {convertFirstLetterToUppercase(props.user.lastName)}</h3>
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
        <div className="logout-section">
          <button
            onClick={signoutUser}
            className="logout-button item">
            <img src={require('../../assets/svg/Logout.svg')} className="item-image item-image__logout " alt="img"/>
              Log Out
          </button>
        </div>
      </div>
      <div className="main">
        {props.children}
      </div>
    </div>
  )
} 

const mapStateToProps = (state) => {
  return({
    user: state.auth.user,
  });
}
const mapDispatchToProps = {
  signout
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);