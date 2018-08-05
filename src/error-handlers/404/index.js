import React from 'react';
import {Redirect} from 'react-router-dom';

// Layout components

import Empty from '../../layout/empty';

import './main.css';

class Error404 extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      secondsForRedirect: 4,
      redirectNow: false
    };
  }

  componentDidMount () {
    var seconds = this.state.secondsForRedirect;

    this.timeout = setTimeout(() => {
      this.setState({
        redirectNow: true
      });
    }, seconds * 1000);

    this.interval = setInterval(() => {
      this.setState({
        secondsForRedirect: --seconds
      });
    }, 1000);
  }

  componentWillUnmount () {
    clearTimeout(this.timeout);
    clearInterval(this.interval);
  }

  render () {
    if (this.state.redirectNow) {
      return (
        <Redirect to="/" />
      );
    }

    var seconds = this.state.secondsForRedirect;

    return (
      <Empty>
        <h1>404 Not found</h1>
        <p>Redirect to main page in {seconds} seconds</p>
      </Empty>
    );
  }
}

export default Error404;