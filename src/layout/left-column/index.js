import React from 'react';
import PageAvatar from '../profile-page/avatar';
import PageFriendList from '../profile-page/friend-list';
import serverData from '../../fake-server';

import './main.css';

class LeftColumn extends React.Component {
  constructor (props) {
    super(props);
    this.state = {

    };
  }

  render () {
    return (
      <div className="left-column">
        <PageAvatar src={serverData.profiles.me.page.avatar} />
        <PageFriendList friends={serverData.profiles.me.friends.list} />
      </div>
    );
  }
};

export default LeftColumn;
