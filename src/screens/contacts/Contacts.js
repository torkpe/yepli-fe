import React from 'react';
import Content from '../../components/content/Content';
import Container from '../../components/container/Container';
import Header from '../../components/header/Header';
import ColoredButton, { COLORS, BUTTON_TYPES } from '../../components/coloredButton/ColoredButton';
import Image from '../../components/image';
import './index.scss';
import Modal from '../../components/modal/Modal';
import CustomTextInput from '../../components/inputs/CustomTextInput';
import { getContacts, postContact } from '../../actions/contacts/actionCreators';
import { convertFirstLetterToUppercase } from '../../utils/helpers';

const tabs = {
  tab1: 'Contacts',
  tab2: 'Invitees',
}

export default class Contacts extends React.Component {
  state = {
    currentTab: tabs.tab1,
    showModal: false,
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    address: '',
    company: '',
    contacts: []
  }

  async componentDidMount() {
    const contacts = await getContacts();
    console.log(contacts)
    this.setState({
      contacts
    })
  }

  toggleDisplay = () => {
    this.setState({
      showModal: !this.state.showModal
    })
  }

  onChange =(event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = async() => {
    const {
      firstName,
      lastName,
      phoneNumber,
      email,
      address,
      company,
    } = this.state;
    const createdContact = await postContact({
      firstName,
      lastName,
      phoneNumber,
      email,
      address,
      company,
    });
    this.setState({
      contacts: [createdContact, ...this.state.contacts],
      showModal: false
    })
  }
  render() {
    const { currentTab, showModal, contacts } = this.state;
    let indexCounter = 0;
    return (
      <Container customStyle="custom__scrollable-container">
        <Content isBigContent={true} customStyle="custom__content">
          <Header>
            <div className="tabs-container">
              <div className="left-tab-items">
              <div
                onClick={() => this.setState({
                  currentTab: tabs.tab1
                })}
                className={`tab ${currentTab === tabs.tab1 ? 'selected-tab' : ''}`}>
                {tabs.tab1}
              </div>
              <div
                  onClick={() => this.setState({
                    currentTab: tabs.tab2
                  })}
                  className={`tab ${currentTab === tabs.tab2 ? 'selected-tab' : ''}`}>
                {tabs.tab2}
              </div>
              </div>
              
                <ColoredButton
                color={COLORS.red}
                onClick={this.toggleDisplay}
                text={'Add new contact'}
                symbolType={BUTTON_TYPES.plus}
              />
            </div>
          </Header>
          <div className="contacts">
            <table>
              <thead className="table-header">
                <tr>
                  <th className="big-column">
                    Name
                  </th>
                  <th className="small-column column-align-left">
                    Phone
                  </th>
                  <th className="big-column column-align-left">
                    Email Address
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                  contacts && contacts.map(contact =>
                    <tr key={indexCounter++}>
                      <td className="column-align-center">
                        <div className="column-items-container">
                          <div className="table-division">
                            <Image
                              {...contact}
                            />
                            <div className="table-division-content">
                              {convertFirstLetterToUppercase(`${contact.firstName} ${contact.lastName}`)}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>{contact.phoneNumber}</td>
                      <td>{contact.email}</td>
                    </tr>
                    )
                }
              </tbody>
            </table>
          </div>
        </Content>
        <Modal
          title={'CREATE NEW CONTACT'}
          closeModal={this.toggleDisplay}
          displayTabs={true}
          currentDisplay={'tab1'}
          tab1={'Basic Information'}
          submit={this.onSubmit}
          showModal={showModal}
        >
          <div className="contact-form">
            <div className="split-input-container">
              <div className="split-input">
                <CustomTextInput
                  title={'First Name'}
                  onChange={this.onChange}
                  name={'firstName'}
                  value={this.state.firstName}
                />
              </div>
              <div className="split-input">
                <CustomTextInput
                  title={'Last Name'}
                  onChange={this.onChange}
                  name={'lastName'}
                  value={this.state.lastName}
                />
              </div>
            </div>
            <CustomTextInput
              title={'Email Address'}
              onChange={this.onChange}
              name={'email'}
              value={this.state.email}
            />
            <CustomTextInput
              title={'Company'}
              onChange={this.onChange}
              name={'company'}
              value={this.state.company}
            />
            <CustomTextInput
              title={'Phone Number'}
              onChange={this.onChange}
              name={'phoneNumber'}
              value={this.state.phoneNumber}
            />
            <CustomTextInput
              title={'Address'}
              onChange={this.onChange}
              name={'address'}
              value={this.state.address}
            />
          </div>

        </Modal>
      </Container>
    )
  }
}