import React from 'react';
import Clock from '../../components/clock';
import {
  Link
} from 'react-router-dom';

import './main.css';

class SiteHeader extends React.Component {
  render () {
    return (
      <header className="site-header">
        <div className="container">
          <Link to="/" className="site-header__root">/</Link>
          <Clock className="site-header__clock"/>
        </div>
      </header>
    );
  }
};

export default SiteHeader;
