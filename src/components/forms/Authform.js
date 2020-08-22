import React from 'react';
import TextInput from '../inputs/TextInput';

import { icons, INPUT_TYPES } from '../helpers/constants';
import Button from '../inputs/Button';

export class AuthForm extends React.Component {
  render() {
    return (
      <div className='form'>
        {
          this.props.page !== 'signin' ?
            <React.Fragment>
              <TextInput
                onChange={this.props.onChange}
                placeholder='First name'
                icon={icons.user}
                type={INPUT_TYPES.text}
                name={'firstName'}
              />
              <TextInput
                onChange={this.props.onChange}
                placeholder='Last name'
                icon={icons.user}
                type={INPUT_TYPES.text}
                name={'lastName'}
              />
            </React.Fragment>
            : ''
        }
        <TextInput
          placeholder='Email'
          icon={icons.mail}
          name={'email'}
          type={INPUT_TYPES.email}
          onChange={this.props.onChange}
        />
        <TextInput
          placeholder='Password'
          icon={icons.lock}
          type={INPUT_TYPES.password}
          name={'password'}
          onChange={this.props.onChange}
        />
        <Button
          onClick={this.props.submit}
          text={this.props.page !== 'signin' ? 'Sign Up' : 'Sign in'}
          class={'auth'}
        />
      </div>
    )
  }
}
