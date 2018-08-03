'use strict'

import React from 'react';
import { strengthIndicator, strengthColor } from '../Validation/PasswordValidation';

export default const Password = ({ password }) => {

  const strength = strengthIndicator(password);
  const color = strengthColor(strength);

  return (
    <div>
      <input
        className='password-input'
        type='password'
        placeholder='Password'
        onChange={ password }
        style={{
          borderColor: color
        }}
        required
      />
    <div>
  );
}
