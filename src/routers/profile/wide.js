import React from 'react';

// Layout components

import WideColumn from '../../layout/wide-column';

// Components

import Info from '../../components/profile/info';
import NewPost from '../../components/new-post';
import Wall from '../../components/wall';

// Store

import store from '../../store';
import config from '../../config';

import './main.css';


class Wide extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      authorized: null,
      wall: null,
      postId: this.props.wall.postsCount
    };
    this.addPost = this.addPost.bind(this);
  }

  addPost (content) {
    fetch(`${config.serverUrl}/users/${this.user._id}/wall`, {
      method: 'put',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(content)
    });

    var _id = this.state.postId;

    var post = {
      content: content,
      postDate: Date.now(),
      userId: this.user._id,
      _id: _id++
    };

    this.wall.posts.push(post);
    this.setState({
      wall: this.wall,
      postId: _id
    });
  }

  componentDidMount () {
    store.then((data) => {
      this.setState({
        authorized: data[0]
      });
    });
  }

  render () {
    this.user = this.props.user;
    this.wall = this.props.wall;

    var wall;
    if (!this.state.wall || this.state.wall._id !== this.wall._id) {
      wall = this.wall;
    } else {
      wall = this.state.wall;
    }

    if (!this.user || !this.state.authorized) {
      return (
        <WideColumn>Waiting for user fetching...</WideColumn>
      );
    }

    return (
      <WideColumn>
        <Info user={this.user} />
        <NewPost
          authorized={this.state.authorized}
          onAddPost={this.addPost}
        />
        <Wall wall={wall} user={this.state.authorized} />
      </WideColumn>
    );
  }
}

export default Wide;