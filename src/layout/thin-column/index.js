import React from 'react';

import './main.css';

class ThinColumn extends React.Component {
  render () {
    return (
      <div className="thin-column">
        {this.props.children}
      </div>
    );
  }
};

export default ThinColumn;
