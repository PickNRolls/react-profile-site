import React from 'react';
import Avatar from '../../components/profile/avatar';
import FriendList from '../../components/profile/friend-list';
import serverData from '../../fake-server';

import './main.css';

class LeftColumn extends React.Component {
  constructor (props) {
    super(props);
    this.state = {

    };
  }

  render () {
    var user = serverData.database.getInfo(this.props.match.params.id);
    var avatarSrc = user.page.avatar;
    var friendList = user.friends.list;

    return (
      <div className="left-column">
        <Avatar src={avatarSrc} />
        <FriendList friends={friendList} />
      </div>
    );
  }
};

export default LeftColumn;
