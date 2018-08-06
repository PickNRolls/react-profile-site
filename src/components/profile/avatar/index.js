import React from 'react';

import './main.css';

class Avatar extends React.Component {
  render () {
    var src = this.props.src;
    if (!src) src = 'https://vk.com/images/camera_200.png?ava=1';

    return (
      <div className="page-avatar page-block">
        <img
          className="page-avatar__pic"
          src={src}
          alt="page avatar"
        />
      </div>
    );
  }
}

export default Avatar;
