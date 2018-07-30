import React from 'react';
import {
  Link
} from 'react-router-dom';

import './main.css';

class Item extends React.Component {
  render () {
    var content = this.props.content;

    return (
      <div className="list-content__item clearfix">
        <div className="list-content__photo-wrap">
          <Link className="list-content__photo-link" to={`/id${content.id}`}>
            <img
              className="list-content__photo"
              src={content.page.avatar}
              alt={content.page.fullName}
            />
          </Link>
        </div>

        <div className="list-content__info">
          <Link className="list-content__info-link" to={`/id${content.id}`}>
            {content.fullName}
          </Link>
        </div>
      </div>
    );
  }
}

export default Item;
