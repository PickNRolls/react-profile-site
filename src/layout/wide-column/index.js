import React from 'react';
import PageInfo from '../profile-page/info';
import PageNewPost from '../profile-page/new-post';
import PagePosts from '../profile-page/posts';
import serverData from '../../fake-server';

import './main.css';

var database = serverData.database;

class WideColumn extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      user: database.getInfo(props.match.params.id)
    };
    this.state.wall = database.getWall(this.state.user.id);
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
    this.user = database.getInfo(this.props.match.params.id);
    this.wall = database.getWall(this.user.id);

    return (
      <div className="wide-column">
        <PageInfo user={this.user} />
        <PageNewPost user={this.user} onAddPost={this.addPost} />
        <PagePosts wall={this.wall} />
      </div>
    );
  }
}

export default WideColumn;
