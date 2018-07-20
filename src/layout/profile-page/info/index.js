import React from 'react';

import './main.css';

class PageInfo extends React.Component {
  constructor (props) {
    super(props);
    this.state = {

    };
  }

  render () {
    var name = this.props.name

    return (
      <div className="page-info page-block">
        <div className="page-info__main">
          <h1 className="page-info__profile-name">{name.first} {name.second}</h1>
          {/* TODO
            <span className="page-info__online-status">Online</span>
              TODO
          */}
        </div>
        <div className="page-info__profile-info">
          
        </div>
      </div>
    );
  }
}

export default PageInfo;