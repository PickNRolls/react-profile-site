import React from 'react';
import serverData from '../../../fake-server';

import './main.css';

class PageFriendList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      listOfFriendsObjects: props.friends.map(function (userID) {
        return serverData.database.getInfo(userID);
      })
    };
  }

  render () {
    return (
      <div className="page-friend-block page-block page-block--wrap">
        <a href="#" className="page-friend-block-header page-block-header">
          <span href="#" className="page-block-header__label">
            Друзья
          </span>
          <span className="page-block-header__count">
            {this.props.friends.length}
          </span>
        </a>
        <ul className="page-friend-list clearfix">
          <li className="page-friend-list__item">
            <a href="#" className="page-friend-list__avatar">
              <img
                src={this.state.listOfFriendsObjects[0].avatar}
                alt={this.state.listOfFriendsObjects[0].name}
                className="page-friend-list__pic"
              />
            </a>
            <a href="#" className="page-friend-list__link">
              {this.state.listOfFriendsObjects[0].name}
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default PageFriendList;