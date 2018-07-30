import React from 'react';
import serverData from '../../fake-server';

// Layout components

import MainContent from '../../layout/main-content';
import Thin from './thin';
import Wide from './wide';

import './main.css';

class FriendsRouter extends React.Component {
  render () {
    var friendsID = serverData.database.getInfo('_admin').friends.list;

    return (
      <React.Fragment>
        <MainContent>
          <Wide friendsID={friendsID} />
          <Thin />
        </MainContent>
      </React.Fragment>
    );
  }
}

export default FriendsRouter;
