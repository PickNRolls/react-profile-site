import React from 'react';

import './main.css';

class PagePosts extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      wall: props.wall
    };
  }

  getPosts () {
    var wall = this.props.wall;
    var posts = wall.posts.map(function (post) {
      return (
        <div className="page-post page-block" key={post.id}>
          {post.content.text}
        </div>
      );
    });

    return posts;
  }

  render () {
    return this.getPosts();
  }
}

export default PagePosts;