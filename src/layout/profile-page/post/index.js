import React from 'react';
import {
  Link
} from 'react-router-dom';

import './main.css';

class PagePost extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      likesCount: 0,
      users: []
    };

    this.addLike = this.addLike.bind(this);
  }

  /*

    Todo logic for real users

  */

  addLike (likeOwnerID) {
    var prevLikesCount = this.state.likesCount;
    var users = this.state.users;
    var id = 1; // Todo change this for argument
    var wasAlreadyLiked = false;
    
    users.forEach(function (userID) {
      if (userID === id) return wasAlreadyLiked = true;
    });

    if (wasAlreadyLiked) {
      return this.setState({
        likesCount: --prevLikesCount,
        users: []
      });
    }

    this.setState({
      likesCount: ++prevLikesCount,
      users: [id]
    });
  }

  render () {
    var post = this.props.post;
    var user = this.props.user;
    var likesCount = null;

    if (this.state.likesCount) {
      likesCount = (
        <div className="page-post__like-count">
          <span>Нравится</span> {this.state.likesCount}
        </div>
      );
    }

    return (
      <div className="page-post page-block page-block--wrap">
        <header className="page-post-header clearfix">
          <Link to={`/id${user.id}`} className="page-post-header__author">
            <img
              src={user.page.avatar}
              alt={user.fullName}
              className="page-post-header__avatar"
            />
          </Link>

          <div className="page-post-info">
            <Link to={`/id${user.id}`} className="page-post-info__author">
              {user.fullName}
            </Link>
            <div className="page-post-info__date">
              сегодня в 10:03
            </div>
          </div>
        </header>
        <div className="page-post-content clearfix">
          <div className="page-post-content__text">
            {post.content.text}
          </div>
          
          <div className="page-post-like-wrap">
            { likesCount }
            <button className="page-button page-post__like" onClick={this.addLike}>
              Мне нравится
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default PagePost;
