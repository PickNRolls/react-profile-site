import React from 'react';

import './main.css';

class EmptyColumn extends React.Component {
  render () {
    return (
      <main className="main-content">
        <div className="container clearfix">
          {this.props.children}
        </div>
      </main>
    );
  }
}

export default EmptyColumn;