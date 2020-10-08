import React from 'react';

export default function EditDealFields(props) {
  return (
    <div className="overview-description">
      <div className="overview-left">
        {
          props.isKeyEditable ?
            <input
              defaultValue={props.propertyKey ? props.propertyKey : ''}
              autoFocus={props.isKeyEditable}
              onChange={props.onItemChange}
              onBlur={() => props.clearEdit()}
              onKeyUp={(e) => {
                if (e.key === 'Enter') {
                  props.clearEdit()
                } 
              }}
            />:
          <React.Fragment>
            <button
              onClick={()=> props.editField(props.propertyKey, props.section, props.index, 'key')}
              className="edit-button">
              <img src={require('../../assets/svg/pen.svg')} alt="pen"/>
            </button>
            {props.propertyKey}
          </React.Fragment>
        }
      </div>
      <div className="overview-right">
        {props.isValueEditable ?
        <input
          onBlur={() => props.clearEdit()}
          autoFocus={props.isValueEditable}
          onChange={props.onItemChange}
          onKeyUp={(e) => {
            if (e.key === 'Enter') {
              props.clearEdit()
            } 
          }}
          defaultValue={props.value ? props.value : ''}/>
        : <React.Fragment>
          {props.value}
          <button
            onClick={()=> props.editField(props.value, props.section, props.index, 'value')}
            className="edit-button">
            <img src={require('../../assets/svg/pen.svg')} alt="pen"/>
          </button>
        </React.Fragment>}
      </div>
    </div>
  )
}
