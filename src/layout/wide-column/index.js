import React from 'react';
import PageInfo from '../profile-page/info';
import serverData from '../../fake-server';

import './main.css';

class WideColumn extends React.Component {
  render () {
    var name = serverData.database.getInfo(this.props.match.params.id).page.name;

    return (
      <div className="wide-column">
        <PageInfo name={name}/>
      </div>
    );
  }
}

export default WideColumn;
