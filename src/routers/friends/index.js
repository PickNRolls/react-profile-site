import React from 'react';

// Layout components

import MainContent from '../../layout/main-content';

import './main.css';

class FriendsRouter extends React.Component {
  constructor (props) {
    super(props);
    this.state = {

    };
  }

  render () {
    return (
      <React.Fragment>
        <MainContent />
      </React.Fragment>
    );
  }
}

export default FriendsRouter;
