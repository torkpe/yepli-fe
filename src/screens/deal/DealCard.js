import React from 'react';
import { Link } from 'react-router-dom';
import ProgressBar from '../../components/progress';

export default function DealCard(props) {
  return (
    <Link to={`deals/${props.dealId}`} className="small-card small-card__deals">
      <ProgressBar/>
      <div className="small-card-center">
        <img
          src={props.image}
          alt="img"
          className="small-card-img"
        />
        <div className="details">
          <h4 className="details-content deal-title">
            {props.title}
          </h4>
          <h3 className="details-content amount">
            {props.amount}
          </h3>
          <div className="created-by">
            {props.createdBy}
          </div>
        </div>
      </div>
    </Link>
  )
}