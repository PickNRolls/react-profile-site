import React from 'react';

import './main.css';

class LeftColumn extends React.Component {
  render () {
    return (
      <div className="left-column">
        {this.props.children}
      </div>
    );
  }
};

export default LeftColumn;
