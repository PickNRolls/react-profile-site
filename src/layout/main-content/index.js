import React from 'react';
import SideBar from '../sidebar';
import './main.css';

class MainContent extends React.Component {
  render () {
    return (
      <main className="main-content">
        <div className="container clearfix">
          <SideBar />
          {this.props.children}
        </div>
      </main>
    );
  }
};

export default MainContent;
