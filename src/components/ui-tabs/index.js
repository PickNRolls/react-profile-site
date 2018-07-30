import React from 'react';

import './main.css';

class UITabs extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      selected: 0
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (index) {
    this.setState({
      selected: index
    });
  }

  render () {
    var items = this.props.elements.items.map((item, index) => {
      var classes = "ui-tabs-list__item";

      if (index === this.state.selected) {
        classes += " ui-tabs-list__item--selected";
      }

      var itemChildren = item.props.children;
      var textContent;

      // If there're not only text nodes

      if (itemChildren instanceof Array) {
        textContent = itemChildren[0];
      } else {
        textContent = itemChildren;
      }
      
      return (
        <li
          className={classes}
          onClick={() => this.handleClick(index)}
          key={textContent}
        >
          {item}
        </li>
      );
    });

    var button = (
      <button className="ui-tabs__button page-button">
        {this.props.elements.button}
      </button>
    );

    return (
      <div className="ui-tabs">
        <ul className="ui-tabs-list clearfix">
          {items}
        </ul>
        {button}
      </div>
    );
  }
}

export default UITabs;