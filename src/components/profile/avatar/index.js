import React from 'react';
import {Link} from 'react-router-dom';

import './main.css';

class Avatar extends React.Component {
  render () {
    var src = this.props.src;
    if (!src) src = 'https://vk.com/images/camera_200.png?ava=1';

    return (
      <div className="page-avatar page-block">
        <img
          className="page-avatar__pic"
          src={src}
          alt="page avatar"
        />

        <Link to="" className="page-button page-avatar__msg">Написать сообщение</Link>
        <button
          className="page-button page-avatar__friends"
          onClick={this.props.onFriendAdd}>
          Добавить в друзья
        </button>
      </div>
    );
  }
}

export default Avatar;
