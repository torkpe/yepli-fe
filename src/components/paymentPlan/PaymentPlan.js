import React from 'react';
import './index.scss';
import ColoredButton, { COLORS } from '../coloredButton/ColoredButton';

export default function PaymentPlan(props) {
  return (
    <div className="payment-plan">
      <div className="payment-plan-amount">
        $0.00
      </div>
      <div className="plan-items">

      </div>
      <ColoredButton
        color={COLORS.red}
        text={'Payment History'}
      />
    </div>
  )
}