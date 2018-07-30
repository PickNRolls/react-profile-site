import React, {Fragment} from 'react';
import serverData from '../../fake-server';

// Layout components

import WideColumn from '../../layout/wide-column';

// Components

import List from '../../components/list-content';
import Item from '../../components/list-content/item';

import './main.css';

var F = Fragment;
var database = serverData.database;

class Wide extends React.Component {
  constructor (props) {
    super(props);
    this.state = {

    };
  }

  render () {
    var friends = this.props.friendsID;

    var listContent = {
      tabs: {
        items: [
          <F>Все друзья 6</F>,
          <F>Друзья онлайн 3</F>
        ],
        button: <F>Найти друзей</F>
      },
      list: friends
    };

    var items = listContent.list.map((friendID) => {
      var friend = database.getInfo(friendID);
      return <Item content={friend} key={friendID} />
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
