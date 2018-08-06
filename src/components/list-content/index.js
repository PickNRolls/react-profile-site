import React from 'react';
import UITabs from '../ui-tabs';

import './main.css';

class ListContent extends React.Component {
  render () {
    var tabsElements = this.props.tabsContent;

    return (
      <div className="list-content page-block page-block--wrap">
        <UITabs elements={tabsElements} />

        {
          // Only this local items children
        }

        {this.props.children}
      </div>
    );
  }
}

export default ListContent;
