import React from 'react';
import SideBar from '../sidebar';
import LeftColumn from '../left-column';
import WideColumn from '../wide-column';

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
          <WideColumn />
        </div>
      </main>
    );
  }
};

export default MainContent;
