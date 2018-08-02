import React, { Component } from 'react';
import './App.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


class App extends Component {
  constructor() {
    super();
    this.state = { didMount: false }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({ didMount: true });
  }

  handleSubmit(e) {
    this.setState({ didMount: false })
    e.preventDefault();
  }

  render() {
    return (

    );
  }
}

export default App;
