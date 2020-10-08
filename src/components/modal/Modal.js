import React from 'react';
import './index.scss';

export default class Modal extends React.Component {

  render() {
    const { currentDisplay, toggleDisplay, hideCreateButton } = this.props;

    return (
      <div id="myModal" className={this.props.showModal ? 'modal show-modal': 'modal'}>
        <div className={`modal-content ${this.props.customStyle ? this.props.customStyle : ''}`}>
          <h3 className='modal-header'>
            {this.props.title}
          </h3>
          <div className="modal-body">
            {
              this.props.displayTabs ?
              <div className="tab">
                <button
                  onClick={() => toggleDisplay('tab1')}
                  className={`tab-button tab-button-1 ${currentDisplay === 'tab1' ? 'active-button' : ''} `}>
                  {this.props.tab1}
                </button>
                {
                  this.props.tab2 ?
                  <button
                    onClick={() => toggleDisplay('tab2')}
                    className={`tab-button ${currentDisplay === 'tab2' ? 'active-button' : ''} `}>
                    {this.props.tab2}
                  </button> : ''
                }
              </div> : ''
            }
            {this.props.children}
          </div>
          <div className="modal-footer">
            <button
              onClick={this.props.closeModal}
              className="modal-button modal-button__button_1">
              CANCEL
            </button>
            {
              hideCreateButton ?
              '' :
              <button
                onClick={this.props.submit}
                className="modal-button">
                CREATE
              </button>
            }
            
          </div>
        </div>
      </div>
    )
  }
}