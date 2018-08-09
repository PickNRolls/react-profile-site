import React, {Fragment as F} from 'react';
import {Link} from 'react-router-dom';

import './main.css';

class Avatar extends React.Component {
  render () {
    var src = this.props.src;
    if (!src) src = 'https://vk.com/images/camera_200.png?ava=1';

    var isAuthorizedUser = this.props.authorized;
    var messageEl = null;
    var friendsEl = null;
    var relations = this.props.relations;

    if (!isAuthorizedUser) {
      messageEl = (
        <Link to="" className="page-button page-avatar__msg">
          Написать сообщение
        </Link>
      );

      if (relations) {
        friendsEl = (
          <button
            className="page-button page-avatar__friends page-avatar__friends--delete"
            onClick={this.props.onFriendDelete}>
            Удалить из друзей
          </button>
        );
      } else {
        friendsEl = (
          <button
            className="page-button page-avatar__friends"
            onClick={this.props.onFriendAdd}>
            Добавить в друзья
          </button>
        );
      }
    }

    return (
      <div className="page-avatar page-block">
        <img
          className="page-avatar__pic"
          src={src}
          alt="page avatar"
        />

        {messageEl}
        {friendsEl}
      </div>
    );
  }
}

export default Avatar;
