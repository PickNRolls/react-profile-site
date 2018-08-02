import React from 'react';

// Layout components

import MainContent from '../../layout/main-content';
import Thin from './thin';
import Wide from './wide';

import config from '../../config';
import './main.css';

class ProfileRouter extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      user: null,
      friends: null
    };
    this.user = null;
    this.userID = null;
  }

  getUser () {
    var userID = this.props.match.params.id;

    fetch(`${config.serverUrl}/users/${userID}`)
    .then((res) => {
      return res.json();
    })
    .then((user) => {
      this.user = user;
      this.userID = user._id;

      var friendsPromises = user.friends.map((friendID) => {
        return fetch(`${config.serverUrl}/users/${friendID}`);
      });

      return Promise.all(friendsPromises);
    })
    .then((responses) => {
      var arr = responses.map((res) => {
        return res.json();
      });

      Promise.all(arr)
      .then((friends) => {
        this.friends = friends;
        var user = this.user;
        this.setState({
          user: user,
          friends: friends
        });
      });
    });

    return this.user;
  }

  render () {
    var user = this.state.user;
    var friends = this.state.friends;

    if (this.props.match.params.id !== this.userID) {
      user = this.getUser();
    }

    if (!user || !friends) {
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
          <Thin user={user} friends={friends} />
          <Wide user={user} />
        </MainContent>
      </React.Fragment>
    );
  }
}

export default ProfileRouter;
