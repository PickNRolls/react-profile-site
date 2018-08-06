import React from 'react';

// Layout components

import ThinColumn from '../../layout/thin-column';

// Components

import Avatar from '../../components/profile/avatar';
import FriendList from '../../components/profile/friend-list';

import './main.css';

class Left extends React.Component {
  render () {
    var user = this.props.user;
    var avatarSrc;
    if (user.page) {
      avatarSrc = user.page.avatar;
    }
    var friends = this.props.friends;

    return (
      <ThinColumn order="0">
        <Avatar src={avatarSrc} onFriendAdd={this.props.onFriendAdd}/>
        <FriendList friends={friends} />
      </ThinColumn>
    );
  }
}

export default Left;