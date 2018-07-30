import React from 'react';

// Layout components

import MainContent from '../../layout/main-content';
import Thin from './thin';
import Wide from './wide';

import './main.css';

class FriendsRouter extends React.Component {
  render () {
    return (
      <React.Fragment>
        <MainContent>
          <Wide />
          <Thin />
        </MainContent>
      </React.Fragment>
    );
  }
}

export default FriendsRouter;
