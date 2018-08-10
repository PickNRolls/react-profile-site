import React from 'react';

// Layout components

import ThinColumn from '../../layout/thin-column';

// Components

import Avatar from '../../components/profile/avatar';
import FriendList from '../../components/profile/friend-list';

// Data store

import authStore from '../../stores/auth';

import './main.css';

class Left extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      authorized: null
    };
  }

  componentDidMount () {
    var user = authStore.getState().auth.user;
    this.setState({
      authorized: user
    })
  }

  checkRelationsBetween (user1, user2) {
    var friends1 = user1.friends;
    var user2Id = user2._id;
    var areFriends = false;

    friends1.forEach((friendId) => {
      if (friendId === user2Id) areFriends = true;
    });

    return areFriends;
  }

  render () {
    var user = this.props.user;
    var authorizedParam = false;
    var avatarSrc;
    if (user.page) {
      avatarSrc = user.page.avatar;
    }

    var friends = this.props.friends;

    if (!this.state.authorized) return null;

    if (user._id === this.state.authorized._id) {
      authorizedParam = true;
    }

    var relations = this.checkRelationsBetween(user, this.state.authorized);

    return (
      <ThinColumn order="0">
        <Avatar
          src={avatarSrc}
          authorized={authorizedParam}
          relations={relations}
          onFriendAdd={this.props.onFriendAdd}
          onFriendDelete={this.props.onFriendDelete}
        />
        <FriendList friends={friends} />
      </ThinColumn>
    );
  }
}

export default Left;