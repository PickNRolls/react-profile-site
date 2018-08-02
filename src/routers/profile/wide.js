import React from 'react';

// Layout components

import WideColumn from '../../layout/wide-column';

// Components

import Info from '../../components/profile/info';
import NewPost from '../../components/new-post';
import Wall from '../../components/wall';

// Store

import store from '../../store';

import './main.css';


class Wide extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      authorized: null
    };
    this.addPost = this.addPost.bind(this);
  }

  addPost (content) {
    var wall = this.wall;
    wall.addPost(content);
  }

  getAuthorizedUser () {
    store.then((data) => {
      this.setState({
        authorized: data[0]
      });
    });
  }

  render () {
    this.user = this.props.user;
    this.wall = this.props.wall;

    if (!this.user) {
      return (
        <WideColumn>Waiting for user fetching...</WideColumn>
      );
    }

    if (!this.state.authorized) {
      this.getAuthorizedUser();
      return null;
    }

    return (
      <WideColumn>
        <Info user={this.user} />
        <NewPost
          authorized={this.state.authorized}
          onAddPost={this.addPost}
        />
        <Wall wall={this.wall} />
      </WideColumn>
    );
  }
}

export default Wide;