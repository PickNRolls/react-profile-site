import React, {Fragment} from 'react';

// Layout components

import WideColumn from '../../layout/wide-column';

// Components

import List from '../../components/list-content';
import Item from '../../components/list-content/item';

import './main.css';

var F = Fragment;

class Wide extends React.Component {
  constructor (props) {
    super(props);
    this.state = {

    };
  }

  render () {
    var friends = this.props.friends;

    var listContent = {
      tabs: {
        items: [
          <F>Все друзья {friends.length}</F>,
          <F>Друзья онлайн {friends.length}</F>
        ],
        button: <F>Найти друзей</F>
      },
      list: friends
    };

    var items = friends.map((friend) => {
      return <Item content={friend} key={friend._id} />
    });

    return (
      <WideColumn>
        <List tabsContent={listContent.tabs}>
          {items}
        </List>
      </WideColumn>
    );
  }
}

export default Wide;
