import React from 'react';

import './main.css';

class NoPost extends React.Component {
  render () {
    return (
      <div className="page-no-post page-block page-block--wrap">
        <img src="https://vk.com/images/no_posts.png" alt="no posts" className="page-no-post__pic"/>
        <span className="page-no-post__text">На стене еще нет записей.</span>
      </div>
    );
  }
}

export default NoPost;
