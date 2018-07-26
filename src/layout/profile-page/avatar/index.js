import React from 'react';

import './main.css';

class PageAvatar extends React.Component {
  constructor (props) {
    super(props);
    this.state = {

    };
  }

  render () {
    return (
      <div className="page-avatar page-block">
        <img
          className="page-avatar__pic"
          src={this.props.src}
          alt="page avatar"
        />
      </div>
    );
  }
}

export default PageAvatar;
