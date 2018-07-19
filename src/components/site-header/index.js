import React from 'react';
import Clock from '../clock';

class SiteHeader extends React.Component {
  render () {
    return (
      <header className="site-header">
        <Clock />
      </header>
    );
  }
};

export default SiteHeader;