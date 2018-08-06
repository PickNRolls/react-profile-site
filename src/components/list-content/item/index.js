import React from 'react';
import {
  Link
} from 'react-router-dom';

import './main.css';

class Item extends React.Component {
  render () {
    var content = this.props.content;
    var src;
    if (content.page) src = content.page.avatar;
    else src = 'https://vk.com/images/camera_200.png?ava=1';
    var fullName = content.name.first + ' ' + content.name.last;

    return (
      <div className="list-content__item clearfix">
        <div className="list-content__photo-wrap">
          <Link className="list-content__photo-link" to={`/id${content._id}`}>
            <img
              className="list-content__photo"
              src={src}
              alt={fullName}
            />
          </Link>
        </div>

        <div className="list-content__info">
          <Link className="list-content__info-link" to={`/id${content._id}`}>
            {fullName}
          </Link>
        </div>
      </div>
    );
  }
}

export default Item;
