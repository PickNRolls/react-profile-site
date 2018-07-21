import React from 'react';
import PageInfo from '../profile-page/info';
import serverData from '../../fake-server';

import './main.css';

class WideColumn extends React.Component {
  constructor (props) {
    super(props);
    this.state = {

    };
  }

  render () {
    return (
      <div className="wide-column">
        <PageInfo name={serverData.profiles.me.page.name}/>
      </div>
    );
  }
}

export default WideColumn;
