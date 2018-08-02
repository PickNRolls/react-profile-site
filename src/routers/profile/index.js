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
      friends: null,
      wall: null
    };
    this.user = null;
    this.wall = null;
    this.userID = null;

    this.getUser = this.getUser.bind(this);
    this.getWall = this.getWall.bind(this);
  }

  getUser () {
    var userID = this.props.match.params.id;

    return fetch(`${config.serverUrl}/users/${userID}`)
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
    return fetch(`${config.serverUrl}/walls/${this.userID}`)
    .then((res) => {
      return res.json();
    })
    .then((wall) => {
      this.wall = wall;
      this.setState({
        wall: wall
      });
    });
  }

  render () {
    var user = this.state.user;
    var wall = this.state.wall;
    var friends = this.state.friends;

    if (this.props.match.params.id !== this.userID) {
      this.getUser()
      .then(this.getWall)
      .catch((err) => {
        if (err) throw err;
      });
    }

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
          <Thin user={user} friends={friends} />
          <Wide user={user} wall={wall} />
        </MainContent>
      </React.Fragment>
    );
  }
}

export default ProfileRouter;
