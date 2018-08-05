import React, {Fragment} from 'react';

// Layout components

import EmptyColumn from '../../layout/empty';

// Style

import './main.css';

var F = Fragment;

class NoAuthorized extends React.Component {
  render () {
    return (
      <F>
        <EmptyColumn>
          <h1 className="no-authorized-error__title">
            You're not authorized!
          </h1>
          <hr/>
        </EmptyColumn>
      </F>
    );
  }
}

export default NoAuthorized;
