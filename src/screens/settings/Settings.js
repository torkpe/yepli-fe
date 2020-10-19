import React from 'react';
import './index.scss';
import Header from '../../components/header/Header';
import ColoredButton, { COLORS, BUTTON_TYPES } from '../../components/coloredButton/ColoredButton';
import PaymentPlans from '../../components/paymentPlans/PaymentPlan';

export default class Settings extends React.Component {
  state = {
    currentTab: 'Deal Types'
  }

  onTabSelect = (currentTab) => {
    this.setState({
      currentTab
    })
  }
  render() {
    const { currentTab } = this.state;
    return (
      <div className="settings-container">
        <div className="settings">
          <Header>
            <div className="settings-tabs">
              <div
                onClick={() => this.setState({
                  currentTab: 'Deal Types'
                })}
                className={`settings-tab ${currentTab === 'Deal Types' ? 'selected-tab' : ''}`}>
                Deal Types
              </div>
              <div
                onClick={() => this.setState({
                  currentTab: 'Templates'
                })}
                className={`settings-tab ${currentTab === 'Templates' ? 'selected-tab' : ''}`}>
                Templates
              </div>
              <div
                onClick={() => this.setState({
                  currentTab: 'Permissions and Role'
                })}
                className={`settings-tab ${currentTab === 'Permissions and Role' ? 'selected-tab' : ''}`}>
                Permissions and Role
              </div>
              <div
                onClick={() => this.setState({
                  currentTab: 'Bills'
                })}
                className={`settings-tab ${currentTab === 'Bills' ? 'selected-tab' : ''}`}>
                Bills
              </div>
            </div>
            {
              currentTab === 'Templates' &&
              <ColoredButton
                color={COLORS.red}
                text={'Create New Template'}
                symbolType={BUTTON_TYPES.plus}
              />
            }
            {
              currentTab === 'Bills' &&
              <div className="bill-buttons">
                <ColoredButton
                  color={COLORS.grey}
                  text={'Due Payment'}
                />
                <ColoredButton
                  color={COLORS.grey}
                  text={'Payment History'}
                />
              </div>
            }
            {
              currentTab === 'Deal Types' &&
                <ColoredButton
                  color={COLORS.red}
                  text={'Add Deal Type'}
                />
            }
            {
              currentTab === 'Permissions and Role' &&
                <ColoredButton
                  color={COLORS.red}
                  text={'Add Deal Type'}
                />
            }

          </Header>
          <div className="settings-content">
            {
              currentTab === 'Bills' && <PaymentPlans/>
            }
          </div>
        </div>
      </div>
    )
  }
}
