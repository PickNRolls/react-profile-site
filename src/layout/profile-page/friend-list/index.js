import React from 'react';

import './main.css';

class PageFriendList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {

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
              <img src="https://sun1-7.userapi.com/c834403/v834403654/185219/NJ2jhvJQ3Y8.jpg?ava=1" alt="" className="page-friend-list__pic"/>
            </a>
            <a href="#" className="page-friend-list__link">Сергей</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default PageFriendList;