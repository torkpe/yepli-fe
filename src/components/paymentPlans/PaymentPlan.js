import React from 'react';
import PaymentPlan from '../paymentPlan/PaymentPlan';
import './index.scss';

export default function PaymentPlans(props) {
  return (
    <div className="plans-container">
      <PaymentPlan/>
      <PaymentPlan/>
      <PaymentPlan/>
    </div>
  )
}