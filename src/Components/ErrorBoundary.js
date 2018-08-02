import React,{Component} from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError : false,
      error : null
    }
  }

  componenDidCatch(error) {
    this.setState({hasError : true, error : error.message})
  }

  render() {
    if(this.state.hasError) {
      return <h1> { this.state.error } </h1>
    }
    return this.props.children;
  }
}
