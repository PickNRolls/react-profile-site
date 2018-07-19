import React from 'react';
import LeftColumn from '../left-column';
import SideBar from '../sidebar';

import './main.css';

class MainContent extends React.Component {
  constructor (props) {
    super(props);
    this.state = {

    };
  }

  render () {
    return (
      <main className="main-content">
        <div className="container clearfix">
          <SideBar />
          <LeftColumn />
        </div>
      </main>
    );
  }
};

export default MainContent;
