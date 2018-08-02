import React from 'react';

// Layout components

import WideColumn from '../../layout/wide-column';

// Components

import Info from '../../components/profile/info';
import NewPost from '../../components/new-post';
import Wall from '../../components/wall';

import './main.css';

class Wide extends React.Component {
  constructor (props) {
    super(props);
    this.addPost = this.addPost.bind(this);
  }

  addPost (content) {
    var wall = this.wall;
    wall.addPost(content);
  }

  render () {
    this.user = this.props.user;
    this.wall = this.props.wall;

    if (!this.user) {
      return (
        <WideColumn>Waiting for user fetching...</WideColumn>
      );
    }

    return (
      <WideColumn>
        <Info user={this.user} />
        <NewPost user={this.user} onAddPost={this.addPost} />
        {
          //<Wall wall={this.wall} />
        }
      </WideColumn>
    );
  }
}

export default Wide;