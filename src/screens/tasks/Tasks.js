import React from 'react';
import { connect } from 'react-redux';
import './index.scss';
import Container from '../../components/container/Container';
import Content from '../../components/content/Content';
import Header from '../../components/header/Header';
import ColoredButton, { COLORS, BUTTON_TYPES } from '../../components/coloredButton/ColoredButton';
import RightContent from '../../components/content/RightContent';
import { convertFirstLetterToUppercase } from '../../utils/helpers';
import CheckBox from '../../components/checkBox/CheckBox';
import CollapsiblePolygon from '../../components/collapsiblePolygon/CollapsiblePolygon';
import Metion from '../../assets/svg/mention.svg';
import Attachment from '../../assets/svg/attachment.svg';

class Tasks extends React.Component {
  state = {
    isHidden: false
  }
  render() {
    const {isHidden} = this.state;
    return (
      <Container>
        <Content>
          <Header>
            <div className="top-header">
              <h2>
                My Tasks
              </h2>
              <div className="button-container">
              <ColoredButton
                color={COLORS.red}
                text={'Ongoing Tasks: 4'}
                symbolType={BUTTON_TYPES.carret}
              />
              <ColoredButton
                color={COLORS.grey}
                text={'Incomplete Tasks: 4'}
                symbolType={BUTTON_TYPES.carret}
              />
              <ColoredButton
                color={COLORS.green}
                text={'Incomplete Tasks: 4'}
                symbolType={BUTTON_TYPES.carret}
              />
              </div>
            </div>
            <div className="header-description">
              See tasks and update pre-existing tasks.
            </div>
          </Header>
          <div className="single-task">
            <div className="single-task-title">
              <button
                onClick={() => this.setState({
                  isHidden: !this.state.isHidden
                })}
                className="collapsible-button">
                <CollapsiblePolygon
                  isCollapsed={this.state.isHidden}
                />
                <div className="title-text">Deal 1</div>
              </button>
            </div>
            <div className={`${isHidden ? 'hidden-task' : ''}`}>
              <div className="single-task-description">
                <CheckBox
                  isChecked={true}
                />
                {convertFirstLetterToUppercase('Physical inspection of property')}
              </div>
              <div className="single-task-description">
                <CheckBox
                  // isChecked={true}
                />
                {convertFirstLetterToUppercase('Physical inspection of property')}
              </div>
              <div className="single-task-description selected-task">
                <CheckBox
                    // isChecked={true}
                />
                {convertFirstLetterToUppercase('Physical inspection of property')}
              </div>
            </div>
          </div>
        </Content>
        <RightContent>
          <Header>
            <button className="close-task">
              X
            </button>
            <div className="select-status">
              <ColoredButton
                color={COLORS.grey}
                text={'Mark as Completed'}
                symbolType={BUTTON_TYPES.carret}
              />
            </div>
          </Header>
          <Header>
            <h2 className="task-title">
              Deal 1
            </h2>
            <h3 className="task-description">
              Physical inspection of property and property history
            </h3>
          </Header>
          <div className="task-description-content">
            <div className="task-content">
              <div className="task-details">
                <div className="task-details-left">Created by:</div>
                <div className="task-details-right">
                  <div className="task-details-value">
                    <div className="user-image"/>
                    James
                  </div>
                </div>
              </div>
              <div className="task-details">
                <div className="task-details-left">Assignee:</div>
                <div className="task-details-right">
                  <div className="task-details-value">
                    <div className="user-image"/>
                    Felix
                  </div>
                </div>
              </div>
              <div className="task-details">
                <div className="task-details-left">Due Date:</div>
                <div className="task-details-right">
                  <div className="task-details-value">
                    01/09/2020
                  </div>
                </div>
              </div>
              <div className="task-details">
                <div className="task-details-left">Description:</div>
                <div className="task-details-right">
                  <div className="task-details-value">
                    Lorem ipsum
                  </div>
                </div>
              </div>
  
            </div>
            <div className="comment-section">
              <div className="comment-user-section">
                <div className="user-image"/>
              </div>
              <div className="comment-box">
                <textarea
                  placeholder="Sumaila gdgd sdjghdsghjs"
                  className="comment">
                </textarea>
                <div className="comment-buttons">
                  <button className="comment-button">
                    <img src={Metion} alt="mention"/>
                  </button>
                  <button className="comment-button">
                    <img src={Attachment} alt="attachment"/>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </RightContent>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return({
  });
}
const mapDispatchToProps = {
}


export default connect(mapStateToProps, mapDispatchToProps)(Tasks);