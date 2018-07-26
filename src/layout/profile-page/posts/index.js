import React from 'react';
import {
  Link
} from 'react-router-dom';
import serverData from '../../../fake-server';

import './main.css';

var database = serverData.database;
var me = database.getInfo('_admin');

class PagePosts extends React.Component {
  getPosts () {
    this.wall = this.props.wall;
    if (!this.wall.posts.length) {
      return (
        <div className="page-no-post page-block page-block--wrap">
          <img src="https://vk.com/images/no_posts.png" alt="no posts" className="page-no-post__pic"/>
          <span className="page-no-post__text">На стене еще нет записей.</span>
        </div>
      );
    }

    this.posts = this.wall.posts.map(function (post) {
      return (
        <div className="page-post page-block page-block--wrap" key={post.id}>
          <header className="page-post-header clearfix">
            <Link to={`/id${me.id}`} className="page-post-header__author">
              <img src={me.page.avatar} alt={me.fullName} className="page-post-header__avatar"/>
            </Link>

            <div className="page-post-info">
              <Link to={`/id${me.id}`} className="page-post-info__author">
                {me.fullName}
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
              <div className="page-post__like-count"><span>Нравится</span> 3</div>
              <button className="page-button page-post__like">Мне нравится</button>
            </div>
          </div>
        </div>
      );
    });

    return this.posts;
  }

  render () {
    return this.getPosts();
  }
}

export default PagePosts;
