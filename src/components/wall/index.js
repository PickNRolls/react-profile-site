import React from 'react';
import Post from '../post';
import NoPost from '../no-post';
import serverData from '../../fake-server';

import './main.css';

class Wall extends React.Component {
  getPosts () {
    this.wall = this.props.wall;
    var user = this.props.user;

    if (!this.wall.posts.length) {
      return <NoPost />
    }

    this.posts = this.wall.posts.map(function (post) {
      return (
        <Post
          post={post}
          user={user}
          key={post._id}
        />
      );
    });

    return this.posts;
  }

  render () {
    return this.getPosts();
  }
}

export default Wall;
