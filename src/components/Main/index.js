import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import './index.scss'
import home from '../../assets/svg/home.png'
import menu from '../../assets/svg/menu.svg'

import DashboardItem from './DashboardItem';
import { signout } from '../../actions/auth/actionCreators';
import { convertFirstLetterToUppercase, routeLinks} from '../../utils/helpers';
import Image from '../image';

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
    let indexCounder = 0
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
              {
                routeLinks.map(routeLink => <DashboardItem
                  key={indexCounder++}
                  title={routeLink.title}
                  toggleSideNav={this.toggleSideNav}
                  icon={routeLink.icon}
                />)
              }
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
          <Link className="user-name" to='/profile'>
            <Image
              {...this.props.user}
            />
            <h3>{convertFirstLetterToUppercase(this.props.user.firstName)} {convertFirstLetterToUppercase(this.props.user.lastName)}</h3>
          </Link>
          <Link to={'/'} className="home">
            <img src={home} className="home-icon" alt='logo'/>
            Home
          </Link>
          <div className="dashboard">
            <h3>
              DASHBOARD
            </h3>
            <div className="items">
              {
                routeLinks.map(routeLink => <DashboardItem
                  key={indexCounder++}
                  title={routeLink.title}
                  icon={routeLink.icon}
                  to={routeLink.to}
                />)
              }
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