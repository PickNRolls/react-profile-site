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

import store from './store';

import './App.css';

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
    if (!this.state.authorized) return null;
    
    var pageId = '/id' + this.state.authorized._id;

    return (
      <div className="app">
        <Router>
          <React.Fragment>
            <SiteHeader />

            <Route exact path="/" render={() => (
              <Redirect to={pageId} />
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
