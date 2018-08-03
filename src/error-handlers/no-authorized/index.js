import React, {Fragment} from 'react';

// Layout components

import MainContent from '../../layout/main-content';
import WideColumn from '../../layout/wide-column';
import ThinColumn from '../../layout/thin-column';

// Style

import './main.css';

var F = Fragment;

class NoAuthorized extends React.Component {
  render () {
    return (
      <F>
        <MainContent>
          <ThinColumn order="0"></ThinColumn>
          <WideColumn>
            <h1>You're not authorized!</h1>
          </WideColumn>
        </MainContent>
      </F>
    );
  }
}

export default NoAuthorized;
