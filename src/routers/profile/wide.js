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
      authorized: null
    };
    this.addPost = this.addPost.bind(this);
  }

  addPost (content) {
    fetch(`${config.serverUrl}/walls/${this.user._id}`, {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(content)
    });
  }

  getAuthorizedUser () {
    store.then((data) => {
      this.setState({
        authorized: data[0]
      });
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
        <Wall wall={this.wall} user={this.user} />
      </WideColumn>
    );
  }
}

export default Wide;