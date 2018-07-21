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
      <div className="page-info page-block page-block--wrap">
        <div className="page-block page-block--inner">
          <div className="page-info__main">
            <div className="page-info__online-status">
              <span>Online</span>
            </div>
            <h1 className="page-info__profile-name">
              {name.first} {name.second}
            </h1>
          </div>
          <div className="page-info__profile-info">
            
          </div>
        </div>
      </div>
    );
  }
}

export default PageInfo;