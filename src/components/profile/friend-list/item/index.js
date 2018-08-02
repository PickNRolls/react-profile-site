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
        <Link to={`/id${this.props.user._id}`}>
          <span className="page-friend-list__avatar">
            <img
              src={this.props.user.page.avatar}
              alt={this.props.user.name.first}
              className="page-friend-list__pic"
            />
          </span>
          <span href="#" className="page-friend-list__link">
            {this.props.user.name.first}
          </span>
        </Link>
      </li>
    );
  }
}

export default Item;
