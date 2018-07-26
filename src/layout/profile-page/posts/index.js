import React from 'react';

import './main.css';

class PagePosts extends React.Component {
  getPosts () {
    this.wall = this.props.wall;
    this.posts = this.props.wall.posts.map(function (post) {
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
