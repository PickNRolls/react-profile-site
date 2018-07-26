import React from 'react';
import {
  Link
} from 'react-router-dom';

import './main.css';

class Item extends React.Component {
  render () {
    return (
      <li className="sidebar-menu__item">
        <Link to={this.props.route.link} className="sidebar-menu__link">{this.props.route.name}</Link>
      </li>
    );
  }
}

export default Item;
