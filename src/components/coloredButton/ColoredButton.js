import React from 'react';
import Carret from '../../assets/svg/down-arrow.svg';
import './index.scss';

export const BUTTON_TYPES = {
  plus: 'plus',
  carret: 'carret'
}

export const COLORS = {
  red: 'red-button',
  green: 'green-button',
  grey: 'grey-button',
  blue: 'blue-button',
}
export default function ColoredButton(props) {
  return (
    props.symbolType === BUTTON_TYPES.plus ?
      <button
        onClick={() => props.onClick ? props.onClick(props.action) : ''}
        className={`colored-button ${props.color} custom__colored-button ${props.customStyle}`}>
        {props.text} +
      </button>
      : props.symbolType === BUTTON_TYPES.carret ?
      <button
        onClick={() => props.onClick ? props.onClick(props.action) : ''}
        className={`colored-button ${props.color} custom__colored-button ${props.customStyle}`}>
        {props.text}
        <img src={Carret} alt="carret" className="carret"/>
      </button>
      :
      <button
        onClick={() => props.onClick ? props.onClick(props.action) : ''}
        className={`colored-button ${props.color} custom__colored-button ${props.customStyle}`}>
        {props.text}
      </button>
  )
}