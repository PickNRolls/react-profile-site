import React from 'react';
import PageInfo from '../profile-page/info';
import fakeData from '../../fake-server-json';

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
        <PageInfo name={fakeData.profileInfo.page.name}/>
      </div>
    );
  }
}

export default WideColumn;
