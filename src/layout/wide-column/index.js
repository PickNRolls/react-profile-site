import React from 'react';

import './main.css';


class WideColumn extends React.Component {
  render () {
    return (
      <div className="wide-column">
        {this.props.children}
      </div>
    );
  }
}

export default WideColumn;
