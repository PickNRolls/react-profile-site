import React from 'react';

// Layout components

import ThinColumn from '../../layout/thin-column';

// Components

import Menu from '../../components/ui-menu';

import './main.css';


class Thin extends React.Component {
  constructor (props) {
    super(props);
    this.state = {

    };
  }

  render () {
    var menuContent = [
      ['Мои друзья', '/'],
      ['Заявки в друзья', '/']
    ];

    return (
      <ThinColumn order="1">
        <Menu links={menuContent} />
      </ThinColumn>
    );
  }
}

export default Thin;