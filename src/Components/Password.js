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
    this.validCapitalCount.bind(this);
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
  * @return boolean: Whether the password has at least one number in it
  */
  numberCount(password) {
    return /\d/.test(password);
  }

  /**
  * @param password
  * @return boolean: Whether the password contains at least a single capitalized letter
  */
  validCapitalCount(password) {
    return str.replace(/[^A-Z]/g, "").length > 1;
  }

  /**
  * @param password
  * @return boolean: Password is 5 or more characters
  */
  validLength(length) {
    return length >= minLength;
  }
  /**
  * @param password
  * @return boolean: If password satisfies all conditions
  */
  isValidPassword(password) {

  }


  /**
  * @TODO: Still need to come up with a basic layout ζ༼Ɵ͆ل͜Ɵ͆༽ᶘ
  */
  render() {

  }
}
