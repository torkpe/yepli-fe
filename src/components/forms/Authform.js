import React from 'react';
import TextInput from '../inputs/TextInput';

import { icons } from '../helpers/constants';
import Button from '../inputs/Button';

export class AuthForm extends React.Component {
  click = () => {
    console.log('hhsjhjsh jhbhj', this.props)

  }
  render() {
    console.log(this.props)
    return (
      <div className='form'>
        {
          this.props.page !== 'signin' ?
            <TextInput
            placeholder='First name Last name'
            icon={icons.user}
            /> : ''
        }
        <TextInput
          placeholder='Email'
          icon={icons.mail}
        />
        <TextInput
          placeholder='Password'
          icon={icons.lock}
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
