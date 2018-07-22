import React from 'react';

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
        <a href="#" className="page-friend-list__avatar">
          <img
            src={this.props.user.avatar}
            alt={this.props.user.name}
            className="page-friend-list__pic"
          />
        </a>
        <a href="#" className="page-friend-list__link">
          {this.props.user.name}
        </a>
      </li>
    );
  }
}

export default Item;