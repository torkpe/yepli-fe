import React from 'react';
import Modal from '../modal/Modal';

import ModalTextInput from '../inputs/ModalTextInput';
import './index.scss';
import CustomCalendar from '../calendar/Calendar';
import moment from 'moment';

export default class NewDeal extends React.Component {
  state = {
    currentDisplay: 'tab1',
    value: '',
    displayCalendar: false,
    startDate: moment().format('MM/DD/YYYY')
  }

  toggleDisplay = (display) => {
    this.setState({
      currentDisplay: display
    })
  }

  onChange = (event) => {
    if (event.target.name === 'value') {
      if (!(/^\d+$/.test(event.target.value.replace(/,/g, ''))) && event.target.value !== '') {
        return;
      }
      this.setState({
        value: event.target.value
      })
      return;
   } 
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  toggleCalendar = () => {
    this.setState({
      displayCalendar: !this.state.displayCalendar
    })
  }
  formatNumber = (num) => {
    return ('' + num).replace(
      /(\d)(?=(?:\d{3})+(?:\.|$))|(\.\d\d?)\d*$/g, 
      function(m, s1, s2){
        return s2 || (s1 + ',');
      }
    );
  }

  onDateChange = (startDate) => {
    console.log(startDate)
    this.setState({
      startDate: moment(startDate).format('MM/DD/YYYY')
    });
    this.toggleCalendar()
  }
  render () {
    return (
      <Modal
        title={'CREATE DEAL'}
        closeModal={this.props.closeModal}
        displayTabs={true}
        currentDisplay={this.state.currentDisplay}
        tab1={'Basic Information'}
        toggleDisplay={this.toggleDisplay}
        tab2={'Additional Information'}
        showModal={this.props.displayModal}>
          <div className="new-deal">
            <div className="new-deal-form">
              <ModalTextInput
                title={'Name of Deal*'}
                onChange={this.onChange}
                name={'name'}
              />
              <ModalTextInput
                title={'Deal value($)*'}
                onChange={this.onChange}
                value={this.formatNumber(this.state.value.replace(/,/g, ''))}
                name={'value'}
              />
              <ModalTextInput
                title={'Type of Deal'}
                onChange={this.onChange}
                name={'type'}
              />
              <CustomCalendar
                title={'Start Date'}
                onClick={this.toggleCalendar}
                onChange={this.onDateChange}
                value={this.state.startDate}
                showModal={this.state.displayCalendar}
              />
            </div>
          </div>
      </Modal>
    )
  }
}