import React from 'react';
import {
  Link
} from 'react-router-dom';

import './main.css';

class UIMenu extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      selected: 0
    };
  }

  render () {
    var links = this.props.links.map((link, index) => {
      var classes = "ui-menu__link";

      if (index === this.state.selected) {
        classes += " ui-menu__link--selected";
      }

      return (
        <Link
          to={link[1]}
          className={classes}
          key={index}
        >
          {link[0]}
        </Link>
      );
    });

    return (
      <div className="page-block page-block--wrap ui-menu">
        {links}
      </div>
    );
  }
}

export default UIMenu;