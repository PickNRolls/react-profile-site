import React from 'react';

// Layout components

import ThinColumn from '../../layout/thin-column';

import './main.css';

class Thin extends React.Component {
  constructor (props) {
    super(props);
    this.state = {

    };
  }

  render () {
    return (
      <ThinColumn order="1">
        Hi
      </ThinColumn>
    );
  }
}

export default Thin;