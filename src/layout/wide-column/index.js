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
    var user = database.getInfo(this.props.match.params.id);

    this.state = {
      user: user,
      wall: database.getWall(user.id)
    };

    this.addPost = this.addPost.bind(this);
  }

  addPost (content) {
    var wall = this.state.wall;
    wall.addPost(content);
    this.setState({
      wall: wall
    });
  }

  render () {
    return (
      <div className="wide-column">
        <PageInfo user={this.state.user} />
        <PageNewPost user={this.state.user} onAddPost={this.addPost} />
        <PagePosts wall={this.state.wall} />
      </div>
    );
  }
}

export default WideColumn;
