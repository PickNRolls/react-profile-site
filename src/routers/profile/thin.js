import React from 'react';
import serverData from '../../fake-server';

// Layout components

import ThinColumn from '../../layout/thin-column';

// Components

import Avatar from '../../components/profile/avatar';
import FriendList from '../../components/profile/friend-list';

import './main.css';

var database = serverData.database;

class Left extends React.Component {
  render () {
    var user = database.getInfo(this.props.user);
    var avatarSrc = user.page.avatar;
    var friends = user.friends.list;

    return (
      <ThinColumn order="0">
        <Avatar src={avatarSrc} />
        <FriendList friends={friends} />
      </ThinColumn>
    );
  }
}

export default Left;