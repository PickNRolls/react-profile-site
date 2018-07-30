import React from 'react';
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

import './App.css';

class App extends React.Component {
  render () {
    return (
      <div className="app">
        <Router>
          <React.Fragment>
            <SiteHeader />
            <Route exact path="/" render={() => (
              <Redirect to="/id_admin" />
            )} />

            <Route path="/id:id" render={(props) => (
              <ProfileRouter {...props} />
            )} />

            <Route path="/friends" component={FriendsRouter} />

            <Route path="/msg" component={MessagesRouter} />
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
