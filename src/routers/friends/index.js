import React from 'react';

// Layout components

import MainContent from '../../layout/main-content';
import Thin from './thin';
import Wide from './wide';

import store from '../../store';
import config from '../../config';

// Api

import apiUser from '../../api/user';

// Stores

import authStore from '../../stores/auth';

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
    var user = authStore.getState().auth.user;
    apiUser.getFriends(user._id)
    .then(friends => {
      this.setState({
        authorized: user,
        friends: friends
      });
    })    
  }

  render () {
    var friends;
    if (!this.state.friends) friends = null;
    friends = this.state.friends;

    return (
      <React.Fragment>
        <MainContent>
          <Wide friends={friends} />
          <Thin />
        </MainContent>
      </React.Fragment>
    );
  }
}

export default FriendsRouter;
