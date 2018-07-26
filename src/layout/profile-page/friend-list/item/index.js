import React from 'react';
import {
  Link
} from 'react-router-dom';

import './main.css';

class Item extends React.Component {
  constructor (props) {
    super(props);
    this.state = {

    };
  }

  render () {
    return (
      <li className="page-friend-list__item">
        <Link to={`/id${this.props.user.id}`}>
          <span className="page-friend-list__avatar">
            <img
              src={this.props.user.avatar}
              alt={this.props.user.name}
              className="page-friend-list__pic"
            />
          </span>
          <span href="#" className="page-friend-list__link">
            {this.props.user.name}
          </span>
        </Link>
      </li>
    );
  }
}

export default Item;
