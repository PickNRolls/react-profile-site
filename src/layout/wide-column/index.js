import React from 'react';
import PageInfo from '../profile-page/info';
import serverData from '../../fake-server';

import './main.css';

class WideColumn extends React.Component {
  render () {
    var user = serverData.database.getInfo(this.props.match.params.id);

    return (
      <div className="wide-column">
        <PageInfo user={user} />
      </div>
    );
  }
}

export default WideColumn;
