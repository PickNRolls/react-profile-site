import React from 'react';
import PageAvatar from '../profile-page/avatar';
import PageFriendList from '../profile-page/friend-list';
import fakeData from '../../fake-server-json';

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
        <PageAvatar src={fakeData.profileInfo.page.avatar} />
        <PageFriendList friends={[{}]} />
      </div>
    );
  }
};

export default LeftColumn;
