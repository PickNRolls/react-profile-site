import React from 'react';

// Layout components

import WideColumn from '../../layout/wide-column';

// Components

import List from '../../components/list-content';

import './main.css';

class Wide extends React.Component {
  constructor (props) {
    super(props);
    this.state = {

    };
  }

  render () {
    return (
      <WideColumn>
        <List />
      </WideColumn>
    );
  }
}

export default Wide;