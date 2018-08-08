import React from 'react';

// Layout components

import Empty from '../../layout/empty';
import ThinColumn from '../../layout/thin-column';
import WideColumn from '../../layout/wide-column';

// Components

import LoginForm from '../../components/login-form';

// Config

import config from '../../config';

import './main.css';

class LoginRouter extends React.Component {
  constructor (props) {
    super(props);
    this.state = {

    };

    this.login = this.login.bind(this);
  }

  login (data) {
    fetch(`${config.serverUrl}/login`, {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then((res) => res.json())
    .then((user) => {
      if (!user) return;
      this.props.onLogin(user);
    })
    .catch((err) => {
      if (err) throw err;
    })
  }

  render () {
    return (
      <Empty>
        <LoginForm onLogin={this.login} />
      </Empty>
    );
  }
}

export default LoginRouter;