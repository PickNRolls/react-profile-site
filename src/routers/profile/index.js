import React from 'react';

// Layout components

import MainContent from '../../layout/main-content';
import Thin from './thin';
import Wide from './wide';

// Error handlers

import Error404 from '../../error-handlers/404';

// Config

import config from '../../config';

// Store

import authStore from '../../stores/auth';

// Style

import apiUser from '../../api/user';

import './main.css';

class ProfileRouter extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      authorized: null,
      user: null,
      friends: null,
      wall: null
    };
    this.user = null;
    this.wall = null;
    this.userID = null;

    this.getUser = this.getUser.bind(this);
    this.getWall = this.getWall.bind(this);
    this.getFriends = this.getFriends.bind(this);
    this.handleFriendAdd = this.handleFriendAdd.bind(this);
    this.handleFriendDelete = this.handleFriendDelete.bind(this);
  }

  componentDidMount () {
    var user = authStore.getState().auth.user;
    this.setState({
      authorized: user
    })
  }

  handleInvalidId () {
    var propsID = this.props.match.params.id;
    var regularTest = /\d{9}/;
    return !regularTest.test(propsID) || propsID.length !== 9;
  }

  checkForAnotherUser () {
    if (this.props.match.params.id !== this.userID) {
      this.getUser()
      .then(this.getWall)
      .then(this.getFriends)
      .catch((err) => {
        if (err) throw err;
      });
    }
  }

  getUser () {
    var userID = this.props.match.params.id;

    return apiUser.getUser(userID)
    .then((user) => {
      this.user = user;
      this.userID = user._id;
      return user;
    });
  }

  getFriends () {
    var user = this.user;

    var friendsPromises = user.friends.map((friendID) => {
      return fetch(`${config.serverUrl}/users/${friendID}`);
    });

    return Promise.all(friendsPromises)
    .then((responses) => {
      var arr = responses.map((res) => {
        return res.json();
      });

      return Promise.all(arr)
      .then((friends) => {
        this.friends = friends;
        var user = this.user;
        this.setState({
          user: user,
          friends: friends
        });
      });
    });
  }

  getWall () {
    apiUser.getWall(this.userID)
    .then((wall) => {
      this.wall = wall;
      this.setState({
        wall: wall
      });
    });
  }

  handleFriendAdd () {
    var userId = this.state.authorized._id;
    var friendId = this.state.user._id;

    fetch(`${config.serverUrl}/users/${userId}/friends/${friendId}`, {
      method: 'put',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(() => {
      console.log(`${userId} added ${friendId}.`);
    })
    .catch((err) => {
      if (err) throw err;
    });
  }

  handleFriendDelete () {
    var userId = this.state.authorized._id;
    var friendId = this.state.user._id;

    fetch(`${config.serverUrl}/users/${userId}/friends/${friendId}`, {
      method: 'delete',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .catch((err) => {
      if (err) throw err;
    });
  }

  render () {
    var user = this.state.user;
    var wall = this.state.wall;
    var friends = this.state.friends;

    if ( this.handleInvalidId() ) {
      return <Error404 />
    }

    this.checkForAnotherUser();

    if (!user || !friends || !wall) {
      return (
        <React.Fragment>
          <MainContent>
            Fetching user data...
          </MainContent>
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        <MainContent>
          <Thin
            user={user}
            friends={friends}
            onFriendAdd={this.handleFriendAdd}
            onFriendDelete={this.handleFriendDelete}
          />
          <Wide
            user={user}
            wall={wall}
          />
        </MainContent>
      </React.Fragment>
    );
  }
}

export default ProfileRouter;
