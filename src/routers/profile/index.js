import React from 'react';

// Layout components

import MainContent from '../../layout/main-content';
import Thin from './thin';
import Wide from './wide';

import './main.css';

class ProfileRouter extends React.Component {
  render () {
    var userID = this.props.match.params.id;

    return (
      <React.Fragment>
        <MainContent>
          <Thin user={userID} />
          <Wide user={userID} />
        </MainContent>
      </React.Fragment>
    );
  }
}

export default ProfileRouter;
