import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import SiteHeader from './layout/site-header';
import MainContent from './layout/main-content';

import './App.css';

class App extends React.Component {
  render () {
    return (
      <div className="app">
        <Router>
          <React.Fragment>
            <Route path="/" component={SiteHeader} />
            <Route path="/" component={MainContent} />
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;