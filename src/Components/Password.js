'use strict'

import React, {Component} from 'react';
import zxcvbn from 'zxcvbn';

const minLength = 5; // Password must be at least 5 characters long


export default class Password extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      length: 0,
      isValid: false
    }
    this.onInputChange.bind(this);
    this.numberCount.bind(this);
    this.isValidPassword.bind(this);
  }

  onInputChange(e) {
    this.setState({
      password: e.target.value,
      length: e.target.value.length
    })
  }

  /**
  * @param password
  * @return boolean whether the password has at least one number in it
  */
  numberCount(password) {
    return /\d/.test(password);
  }



  isValidPassword() {

  }
}
