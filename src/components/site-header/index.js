import React from 'react';
import Clock from '../clock';

import './main.css';

class SiteHeader extends React.Component {
  render () {
    return (
      <header className="site-header">
        <div className="container">
          <Clock className="site-header__clock"/>
        </div>
      </header>
    );
  }
};

export default SiteHeader;
