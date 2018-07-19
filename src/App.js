import React from 'react';
import SiteHeader from './layout/site-header';
import MainContent from './layout/main-content';

import './App.css';

var App = function (props) {
  return (
    <div className="app">
      <SiteHeader />
      <MainContent />
    </div>
  );
};

export default App;
