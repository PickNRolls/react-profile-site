import React, {Fragment} from 'react';
import UITabs from '../ui-tabs';

import './main.css';

var F = Fragment;

class ListContent extends React.Component {
  constructor (props) {
    super(props);
    this.state = {

    };
  }

  render () {
    var tabsElements = {
      items: [
        <F>Все друзья 6</F>,
        <F>Друзья онлайн 3</F>
      ],
      button: <F>Найти друзей</F>
    };

    return (
      <div className="list-content">
        <UITabs elements={tabsElements} />
      </div>
    );
  }
}

export default ListContent;