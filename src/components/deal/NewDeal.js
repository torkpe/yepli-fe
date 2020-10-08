import React from 'react';
import Modal from '../modal/Modal';

import ModalTextInput from '../inputs/ModalTextInput';
import './index.scss';
import CustomCalendar from '../calendar/Calendar';
import moment from 'moment';
import { connect } from 'react-redux';
import { createDeal } from '../../actions/deals/actionCreators';
import { formatNumber } from '../../utils/helpers';

export class NewDeal extends React.Component {
  state = {
    currentDisplay: 'tab1',
    value: '',
    name: '',
    type: '',
    displayCalendar: false,
    closingDate: moment().format('MM/DD/YYYY')
  }

  componentDidMount() {
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

  onDateChange = (closingDate) => {
    console.log(closingDate)
    this.setState({
      closingDate: moment(closingDate).format('MM/DD/YYYY')
    });
    this.toggleCalendar()
  }

  createDeal = () => {
    const { name, type, value, closingDate } = this.state;
    this.props.createDeal({
      name, type, value: value.replace(/,/g, ''), closingDate
    }, this.props.props)
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
        submit={this.createDeal}
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
                value={formatNumber(this.state.value.replace(/,/g, ''))}
                name={'value'}
              />
              <ModalTextInput
                title={'Type of Deal'}
                onChange={this.onChange}
                name={'type'}
              />
              <CustomCalendar
                title={'Closing Date'}
                onClick={this.toggleCalendar}
                onChange={this.onDateChange}
                value={this.state.closingDate}
                showModal={this.state.displayCalendar}
              />
            </div>
          </div>
      </Modal>
    )
  }
}

const mapDispatchToProps = {
  createDeal,
}

const mapStateToProps = (state) => {
  console.log(state.auth)
  return ({});
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewDeal);