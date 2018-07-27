import React from 'react';
import {
  Link
} from 'react-router-dom';
import staticFiles from '../../../fake-server/static';

import './main.css';

class Item extends React.Component {
  render () {
    var link = this.props.item.link;
    var name = this.props.item.name;
    var icon = this.props.item.icon;
    var styleObj = {
      backgroundImage: `url(${staticFiles.sidebar.icons})`,
      backgroundPosition: `${icon.x}px ${icon.y}px`
    };

    return (
      <li className="sidebar-menu__item" style={styleObj}>
        <Link to={link} className="sidebar-menu__link">
          {name}
        </Link>
      </li>
    );
  }
}

export default Item;
