import React from 'react';
import {
  Link
} from 'react-router-dom';

import './main.css';

var placeholderString = 'Что нового?';

class NewPost extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      text: placeholderString,
      isPlaceholderVisible: true
    };

    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.sendPost = this.sendPost.bind(this);
  }

  makePlaceholderHandle (showPlaceholder) {
    return function () {
      if (!this.state.text || this.state.text === placeholderString) {
        this.setState({
          isPlaceholderVisible: showPlaceholder
        }, this.showPlaceholder);
      }
    };
  }

  handleFocus = this.makePlaceholderHandle(false);

  handleBlur = this.makePlaceholderHandle(true);

  handleChange (e) {
    this.setState({
      text: e.target.value
    });
  }

  handleKeyPress (e) {
    if (e.key === 'Enter' && e.ctrlKey) {
      this.sendPost();
    }
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
    var user = this.props.authorized;

    return (
      <div className="page-new-post page-block page-block--wrap">
        <div className="page-new-post__field-wrap">
          <Link to={`/id${user._id}`} className="page-new-post__avatar-wrap">
            <img
              src={user.page.avatar}
              alt={user.name.first}
              className="page-new-post__avatar"
            />
          </Link>
          <textarea
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
            className={'page-new-post__field' + (this.state.isPlaceholderVisible ? ' placeholder' : '')}
            value={this.state.text}
          />
        </div>
        <div className="page-new-post__submit">
          <button onClick={this.sendPost} className="page-button page-new-post__button">Отправить</button>
        </div>
       </div> 
    );
  }
}

export default NewPost;
