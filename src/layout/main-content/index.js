import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
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
          <Route path="/id:id" component={LeftColumn} />
          <Route path="/id:id" component={WideColumn} />
        </div>
      </main>
    );
  }
};

export default MainContent;
