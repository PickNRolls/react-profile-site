import React from 'react';
import PageAvatar from '../../components/profile-page/avatar';
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
      </div>
    );
  }
};

export default LeftColumn;
