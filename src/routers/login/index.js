import React from 'react';
import {Redirect} from 'react-router-dom';

// Layout components

import Empty from '../../layout/empty';
import ThinColumn from '../../layout/thin-column';
import WideColumn from '../../layout/wide-column';

// Components

import LoginForm from '../../components/login-form';

// Config

import config from '../../config';

// Redux tools

import authStore from '../../stores/auth';
import {login} from '../../actions/auth';

import './main.css';

class LoginRouter extends React.Component {
  constructor (props) {
    super(props);
    this.state = {

    };

    this.login = this.login.bind(this);
  }

  login (data) {
    authStore.dispatch(login(data));
  }

  render () {
    if (this.props.location.pathname !== '/login')
      return <Redirect to="/login" />;

    return (
      <Empty>
        <LoginForm onLogin={this.login} />
      </Empty>
    );
  }
}

export default LoginRouter;