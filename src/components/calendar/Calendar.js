import React from 'react';
import Calendar from 'react-calendar'
import Modal from '../modal/Modal';
import CalendarButton from '../inputs/CalendarButton';
import 'react-calendar/dist/Calendar.css';
import './index.scss';

export default function CustomCalendar(props) {
  return(
    <React.Fragment>
      <Modal
        title={'Calendar'}
        customStyle='calendar-display'
        hideCreateButton={true}
        closeModal={props.onClick}
        showModal={props.showModal}
      >
        <Calendar
          minDate={new Date()}
          activeStartDate={new Date()}
          onChange={props.onChange}
        />
      </Modal>
      <CalendarButton
        title={props.title}
        value={props.value}
        onClick={props.onClick}
      />
    </React.Fragment>
  )
}