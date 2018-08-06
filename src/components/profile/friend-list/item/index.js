import React from 'react';
import {
  Link
} from 'react-router-dom';

import './main.css';

class Item extends React.Component {
  render () {
    var user = this.props.user;
    var src;

    if (user.page) src = user.page.avatar;
    else src = 'https://vk.com/images/camera_200.png?ava=1';

    return (
      <li className="page-friend-list__item">
        <Link to={`/id${user._id}`}>
          <span className="page-friend-list__avatar">
            <img
              src={src}
              alt={user.name.first}
              className="page-friend-list__pic"
            />
          </span>
          <span href="#" className="page-friend-list__link">
            {user.name.first}
          </span>
        </Link>
      </li>
    );
  }
}

export default Item;
