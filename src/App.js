import React, {Fragment} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import cookie from 'react-cookies';

// Main routers

import LoginRouter from './routers/login';
import ProfileRouter from './routers/profile';
import FriendsRouter from './routers/friends';
import MessagesRouter from './routers/messages';

// Layout components

import SiteHeader from './layout/site-header';

// Errors handlers

import NoAuthorized from './error-handlers/no-authorized';
import Error404 from './error-handlers/404';

// Stores

import authStore from './stores/auth';

// Style

import './App.css';

var F = Fragment;

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      authorized: null
    };
  }

  componentDidMount () {
    this.authSub = authStore.subscribe(() => {
      var user = authStore.getState().auth.user;
      if (!user.name) return;
      this.setState({
        authorized: user
      });
    })
  }

  componentWillUnmount() {
    this.authSub();
  }

  render () {
    var AppEl = (props) => (
      <div className="app">
        <Router>
          <F>
            <SiteHeader />
            {props.children}
          </F>
        </Router>
      </div>
    );

    if (!this.state.authorized) {
      return (
        <AppEl>
          <Route render={(props) => (
            <LoginRouter {...props} />
          )} />
        </AppEl>
      );
    }

    var userPage = `/id${this.state.authorized._id}`;

    return (
      <AppEl>
        <Switch>
          <Route exact path="/" render={(props) => (
            <Redirect to={userPage} />
          )} />

          <Route exact path="/login" render={(props) => (
            <Redirect to={userPage} />
          )} />

          <Route path="/id:id" render={(props) => (
            <ProfileRouter {...props} />
          )} />

          <Route exact path="/friends" component={FriendsRouter} />

          <Route exact path="/msg" component={MessagesRouter} />

          <Route component={Error404} />
        </Switch>
      </AppEl>
    );
  }
}

export default App;
