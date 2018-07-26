import React from 'react';

import './main.css';

class PagePosts extends React.Component {
  getPosts () {
    this.wall = this.props.wall;
    if (!this.wall.posts.length) {
      return (
        <div className="page-no-post page-block page-block--wrap">
          <img src="https://vk.com/images/no_posts.png" alt="no posts" className="page-no-post__pic"/>
          <span className="page-no-post__text">На стене еще нет записей.</span>
        </div>
      );
    }

    this.posts = this.wall.posts.map(function (post) {
      return (
        <div className="page-post page-block" key={post.id}>
          {post.content.text}
        </div>
      );
    });

    return this.posts;
  }

  render () {
    return this.getPosts();
  }
}

export default PagePosts;
