import React from 'react';
import serverData from '../../../fake-server';
import {
  Link
} from 'react-router-dom';
import Item from './item';

import './main.css';

var getRandomBetween = function (min, max) {
  return Math.floor(Math.random() * max) + min;
};

class FriendList extends React.Component {
  getSixRandomFriends () {
    var friends = this.props.friends.map(function (userID) {
      return serverData.database.getInfo(userID);
    });
    var data = [];
    var friendsLen = friends.length < 6 ? friends.length : 6;

    for (var i = 0; i < friendsLen; i++) {
      let randomNum = getRandomBetween(0, friends.length);
      data.push(friends[randomNum]);
      friends.splice(randomNum, 1);
    }

    return data.map((friend) => <Item user={friend} key={friend.id} /> );
  }

  render () {
    var friends = this.getSixRandomFriends();

    return (
      <div className="page-friend-block page-block page-block--wrap">
        <Link to="/friends" className="page-friend-block-header page-block-header">
          <span className="page-block-header__label">
            Друзья
          </span>
          <span className="page-block-header__count">
            {this.props.friends.length}
          </span>
        </Link>
        <ul className="page-friend-list clearfix">
          {friends}
        </ul>
      </div>
    );
  }
}

export default FriendList;
