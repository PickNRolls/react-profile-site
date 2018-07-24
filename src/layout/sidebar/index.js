import React from 'react';
import Item from './item';
import serverData from '../../fake-server';

import './main.css';

class SideBar extends React.Component {
  renderMenu () {
    var sidebarData = serverData.sidebar;
    var items = sidebarData.map((route) => {
      return <Item route={route} key={route.name}/>
    });

    return <ul className="sidebar-menu">{items}</ul>;
  }

  render () {
    var menu = this.renderMenu();

    return (
      <aside className="sidebar">
        {menu}
      </aside>
    );
  }
}

export default SideBar;
