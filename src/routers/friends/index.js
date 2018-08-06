import React from 'react';

// Layout components

import MainContent from '../../layout/main-content';
import Thin from './thin';
import Wide from './wide';

import store from '../../store';
import config from '../../config';

import './main.css';

class FriendsRouter extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      authorized: null,
      friends: null
    }
  }

  componentDidMount () {
    store.then((data) => {
      return this.setState({
        authorized: data[0]
      });
    })
    .then(() => {
      var authorized = this.state.authorized;

      return fetch(`${config.serverUrl}/users/${authorized._id}/friends`)
      .then((res) => res.json())
    })
    .then((friends) => {
      this.setState({
        friends: friends
      });
    })
    .catch((err) => {
      if (err) throw err;
    })
  }

  render () {
    if (!this.state.friends) return null;

    return (
      <React.Fragment>
        <MainContent>
          <Wide friends={this.state.friends} />
          <Thin />
        </MainContent>
      </React.Fragment>
    );
  }
}

export default FriendsRouter;
