import React from 'react';

import './main.css';

class ThinColumn extends React.Component {
  render () {
    var direction;
    var order = this.props.order;
    var style = {};

    if (order === '0') {
      direction = 'Right'
    } else if (order === '1') {
      direction = 'Left';
    } else {
      throw new Error('No order for the ThinColumn component');
    }

    style['margin' + direction] = '15px';

    return (
      <div className="thin-column" style={style} >
        {this.props.children}
      </div>
    );
  }
};

export default ThinColumn;
