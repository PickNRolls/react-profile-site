import React from 'react';
import {
  Link
} from 'react-router-dom';

import './main.css';

class Item extends React.Component {
  render () {
    var content = this.props.content;
    var fullName = content.name.first + ' ' + content.name.last;

    return (
      <div className="list-content__item clearfix">
        <div className="list-content__photo-wrap">
          <Link className="list-content__photo-link" to={`/id${content._id}`}>
            <img
              className="list-content__photo"
              src={content.page.avatar}
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
