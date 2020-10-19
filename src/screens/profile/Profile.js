import React from 'react';
import Content from '../../components/content/Content';
import Container from '../../components/container/Container';
import Header from '../../components/header/Header';
import './index.scss';
import CustomTextInput from '../../components/inputs/CustomTextInput';
import ColoredButton, { COLORS } from '../../components/coloredButton/ColoredButton';
import TextArea from '../../components/inputs/TextArea';
import { INPUT_TYPES } from '../../components/helpers/constants';
import { addImage, getUserDetails, updateUserDetails, updatePassword } from '../../actions/user/actionCreators';
import { connect } from 'react-redux';
import Image from '../../components/image';
import { IMAGE_SIZES } from '../../components/image';

const tabs = {
  tab1: 'Basic Information',
  tab2: 'Update Password',
}

export class Profile extends React.Component {
  state = {
    currentTab: tabs.tab1,
    image: '',
    email: '',
    company: '',
    name: '',
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
    bio: '',
    phoneNumber: '',
    userDetails: {},
  }

  async componentDidMount() {
    const userDetails = await getUserDetails();
    if (userDetails.firstName) {
      this.setState({
        ...userDetails,
        name: `${userDetails.firstName} ${userDetails.lastName}`
      })
    }
  }
  onTabSelect = (currentTab) => {
    this.setState({
      currentTab
    })
  }

  fileChange = async (event) => {
    const formData = new FormData();
    formData.append('file',event.target.files[0])
    formData.get('file')
    const image = this.props.addImage(formData);
    this.setState({
      image
    })
  }

  onChange=(event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submit = async () => {
    const { currentTab, name, bio, phoneNumber, company, newPassword, confirmPassword, oldPassword } = this.state;
    if (!name.split(' ')[1]) {
      return
    }

    if (currentTab === tabs.tab1) {
      this.props.updateUserDetails({
        firstName: name.split(' ')[0],
        lastName: name.split(' ')[1],
        bio,
        phoneNumber,
        company
      })
    }

    if (currentTab === tabs.tab2) {
      try {
        if (confirmPassword !== newPassword) {
          console.log('Incorrect password');
          return;
        }
        await updatePassword({
          oldPassword,
          newPassword
        })
      } catch (error) {
        console.log(error)
      }
    }
  }

  render() {
    const {currentTab } = this.state;
    const { user } = this.props;
    return (
      <Container customStyle="custom__scrollable-container">
        <Content customStyle="custom__content">
          <Header>
            <div className="image-container">
              <Image
                size={IMAGE_SIZES.big}
                {...user}
              />
            </div>
            <div className="profile image-upload">
              <label htmlFor="file-input">
                <div className="camera-background">
                  <img src={require('../../assets/svg/camera.svg')} alt="camera"/>
                </div>
              </label>
              <input
                onChange={this.fileChange}
                name="file"
                id="file-input" type="file" multiple/>
            </div>

            <div className="tabs-container">
              <div
                onClick={() => this.setState({
                  currentTab: tabs.tab1
                })}
                className={`tab ${currentTab === tabs.tab1 ? 'selected-tab' : ''}`}>
                Basic Information
              </div>
              <div
                  onClick={() => this.setState({
                    currentTab: tabs.tab2
                  })}
                  className={`tab ${currentTab === tabs.tab2 ? 'selected-tab' : ''}`}>
                Update Password
              </div>
            </div>
          </Header>
          <div className="profile-forms">
            {
              currentTab === tabs.tab1 ?
              <React.Fragment>
                <CustomTextInput
                  title={'Name(First, Last Name)'}
                  onChange={this.onChange}
                  name={'name'}
                  value={this.state.name}
                />
                <TextArea
                  title={'Bio'}
                  onChange={this.onChange}
                  name={'bio'}
                  value={this.state.bio}
                />
                <CustomTextInput
                  title={'Email'}
                  onChange={this.onChange}
                  name={'email'}
                  disabled={true}
                  value={this.state.email}
                />
                <CustomTextInput
                  title={'Phone number'}
                  onChange={this.onChange}
                  name={'phoneNumber'}
                  value={this.state.phoneNumber}
                />
                <CustomTextInput
                  title={'Company'}
                  onChange={this.onChange}
                  name={'company'}
                  value={this.state.company}
                />
              </React.Fragment>
              :
              <React.Fragment>
                <CustomTextInput
                  title={'Old Password'}
                  onChange={this.onChange}
                  name={'oldPassword'}
                  type={INPUT_TYPES.password}
                  value={this.state.oldPassword}
                />
                <CustomTextInput
                  title={'New Password'}
                  onChange={this.onChange}
                  name={'newPassword'}
                  type={INPUT_TYPES.password}
                  value={this.state.newPassword}
                />
                <CustomTextInput
                  title={'Confirm Password'}
                  onChange={this.onChange}
                  name={'confirmPassword'}
                  type={INPUT_TYPES.password}
                  value={this.state.confirmPassword}
                />
              </React.Fragment>
            }
            <div className="submit">
              <ColoredButton
                customStyle={'custom-style'}
                text={'UPDATE INFORMATION'}
                color={COLORS.red}
                onClick={this.submit}
              />
            </div>
          </div>
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return({
    user: state.auth.user
  });
}
const mapDispatchToProps = {
  addImage,
  updateUserDetails
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);