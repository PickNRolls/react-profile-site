import React from 'react';
import {
  Link
} from 'react-router-dom';

import './main.css';

class PageNewPost extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      text: null,
      isFocused: false
    };
  }

  render () {
    return (
      <div className="page-new-post page-block page-block--wrap">
        <div className="page-new-post__field-wrap">
          <Link to={`/id${this.props.user.id}`} className="page-new-post__avatar-wrap">
            <img
              src={this.props.user.page.avatar}
              alt={this.props.user.page.name.first}
              className="page-new-post__avatar"
            />
          </Link>
          <textarea className="page-new-post__field" />
        </div>
        <div className="page-new-post__submit">
          <button className="page-new-post__button">Отправить</button>
        </div>
       </div> 
    );
  }
}

export default PageNewPost;
