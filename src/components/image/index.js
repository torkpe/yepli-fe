import React from 'react';
import './index.scss';
import { returnOnlyFirstLettersOfEachWord } from '../../utils/helpers';


export const IMAGE_SIZES = {
  big: 'big-photo',
  medium: 'medium-photo',
}
export default function Image(props) {
  return (
    props.image ?
    <img src={props.image} alt="user-display" className={`display-photo ${props.size}`}/>
    :
    <div className="display-photo">
      {returnOnlyFirstLettersOfEachWord(props.firstName ? `${props.firstName} ${props.lastName}` : props.email)}
    </div>
  )
}