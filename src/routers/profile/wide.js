import React from 'react';
import serverData from '../../fake-server';

// Layout components

import WideColumn from '../../layout/wide-column';

// Components

import Info from '../../components/profile/info';
import NewPost from '../../components/new-post';
import Wall from '../../components/wall';

import './main.css';

var database = serverData.database;

class Wide extends React.Component {
  constructor (props) {
    super(props);
    this.addPost = this.addPost.bind(this);
  }

  addPost (content) {
    var wall = this.wall;
    wall.addPost(content);
    this.setState({
      wall: wall
    });
  }

  render () {
    var userID = this.props.user;
    this.user = database.getInfo(userID);
    this.wall = database.getWall(userID);

    return (
      <WideColumn>
        <Info user={this.user} />
        <NewPost user={this.user} onAddPost={this.addPost} />
        <Wall wall={this.wall} />
      </WideColumn>
    );
  }
}

export default Wide;