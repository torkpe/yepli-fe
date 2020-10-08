import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import './index.scss'
import home from '../../assets/svg/home.png'
import menu from '../../assets/svg/menu.svg'
import TaskIcon from '../../assets/svg/my-task.svg';
import Contact from '../../assets/svg/contact.svg';
import MyDeals from '../../assets/svg/My-deals.svg';
import Settings from '../../assets/svg/Settings.svg';
import DashboardItem from './DashboardItem';
import { signout } from '../../actions/auth/actionCreators';
import { convertFirstLetterToUppercase } from '../../utils/helpers';

export class Main extends React.Component {
  state = {
    openSidenav: false
  }
  signoutUser = () => {
    this.props.signout();
    this.props.history.push('');
  }

  toggleSideNav = () => {
    this.setState({
      openSidenav: !this.state.openSidenav
    })
  }

  render () {
    const { openSidenav } = this.state;
    return (
      <div className='container'>
        <div className="nav-bar">

        </div>
        <div className={openSidenav ? "sidenav" : "hidden-sidenav"}>
          <div className="closebtn" onClick={this.toggleSideNav}>&times;</div>
          <Link onClick={this.toggleSideNav} to={'/'}className="home-sidebar">
            <img src={home} className="home-icon" alt='logo'/>
            Home
          </Link>
          <div className="dashboard-sidebar">
            <div className="items-sidebar">
              <DashboardItem
                title="My Task"
                toggleSideNav={this.toggleSideNav}
                icon={TaskIcon}
              />
              <DashboardItem
                title="Contacts"
                toggleSideNav={this.toggleSideNav}
                icon={Contact}
              />
              <DashboardItem
                title="My Deals"
                toggleSideNav={this.toggleSideNav}
                icon={MyDeals}
                to={'Deals'}
              />
              <DashboardItem
                title="Settings"
                toggleSideNav={this.toggleSideNav}
                icon={Settings}
              />
            </div>
          </div>
          <div className="logout-section-sidebar">
            <button
              onClick={this.signoutUser}
              className="logout-button item sidebar-logout">
              <img src={require('../../assets/svg/Logout.svg')} className="item-image item-image__logout " alt="img"/>
                Log Out
            </button>
          </div>
        </div>
        <div className="side-bar">
          <div className='side-bar-header'>
            <div className="menu" onClick={this.toggleSideNav}><img className="menu-icon" src={menu} alt="menu"/></div>
            <h1 className="logo">
              yepli.
            </h1>
          </div>
          <div className="user-name">
            <div className="user-image">
            </div>
            <h3>{convertFirstLetterToUppercase(this.props.user.firstName)} {convertFirstLetterToUppercase(this.props.user.lastName)}</h3>
          </div>
          <Link to={'/'} className="home">
            <img src={home} className="home-icon" alt='logo'/>
            Home
          </Link>
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
                to={'deals'}
              />
              <DashboardItem
                title="Settings"
                icon={Settings}
              />
            </div>
          </div>
          <div className="logout-section">
            <button
              onClick={this.signoutUser}
              className="logout-button item">
              <img src={require('../../assets/svg/Logout.svg')} className="item-image item-image__logout " alt="img"/>
                Log Out
            </button>
          </div>
        </div>
        <div className="main">
          {this.props.children}
        </div>
      </div>
    )
  }
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
)(withRouter(Main));