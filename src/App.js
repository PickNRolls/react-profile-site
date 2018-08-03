import React, {Fragment} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';

// Main routers

import ProfileRouter from './routers/profile';
import FriendsRouter from './routers/friends';
import MessagesRouter from './routers/messages';

// Layout components

import SiteHeader from './layout/site-header';

// Errors handlers

import NoAuthorized from './error-handlers/no-authorized';

// Data store

import store from './store';

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
    store.then((data) => {
      this.setState({
        authorized: data[0]
      });
    });
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
          <NoAuthorized />
        </AppEl>
      );
    }
    
    var pageId = '/id' + this.state.authorized._id;

    return (
      <AppEl>
        <Route exact path="/" render={() => (
          <Redirect to={pageId} />
        )} />

        <Route path="/id:id" render={(props) => (
          <ProfileRouter {...props} />
        )} />

        <Route path="/friends" component={FriendsRouter} />

        <Route path="/msg" component={MessagesRouter} />
      </AppEl>
    );
  }
}

export default App;
