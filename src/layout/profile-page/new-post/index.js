import React from 'react';
import {
  Link
} from 'react-router-dom';

import './main.css';

var placeholderString = 'Что нового?';

class PageNewPost extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      text: placeholderString,
      isPlaceholderVisible: true
    };

    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.sendPost = this.sendPost.bind(this);
  }

  makeHandle (showPlaceholder) {
    return function () {
      if (!this.state.text || this.state.text === placeholderString) {
        this.setState({
          isPlaceholderVisible: showPlaceholder
        }, this.showPlaceholder);
      }
    };
  }

  handleFocus = this.makeHandle(false);

  handleBlur = this.makeHandle(true);

  handleChange (e) {
    this.setState({
      text: e.target.value
    });
  }

  showPlaceholder () {
    if (this.state.isPlaceholderVisible) {
      this.setState({
        text: placeholderString
      });
    } else {
      this.setState({
        text: ''
      })
    }
  }

  sendPost () {
    var content = {
      text: this.state.text
    };

    this.props.onAddPost(content);

    this.setState({
      text: placeholderString,
      isPlaceholderVisible: true
    });
  }

  componentDidMount() {
    this.showPlaceholder();
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
          <textarea
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            onChange={this.handleChange}
            className={'page-new-post__field' + (this.state.isPlaceholderVisible ? ' placeholder' : '')}
            value={this.state.text}
          />
        </div>
        <div className="page-new-post__submit">
          <button onClick={this.sendPost} className="page-new-post__button">Отправить</button>
        </div>
       </div> 
    );
  }
}

export default PageNewPost;
