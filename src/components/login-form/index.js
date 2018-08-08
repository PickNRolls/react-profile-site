import React from 'react';

import './main.css';

class LoginForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      login: '',
      password: ''
    };

    // this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  // handleChange (e) {
  //   console.log(e.target);
  // }

  handleBlur (e) {
    var type = e.target.type;

    if (type === 'text') {
      this.setState({
        login: e.target.value
      });
    } else {
      this.setState({
        password: e.target.value
      });
    }
  }

  makeSimpleValidate () {
    var {login, password} = this.state;
    if (login.length === 0 || password.length === 0) {
      alert('Please fill all inputs');
      return false;
    }

    return true;
  }

  handleLogin (e) {
    e.preventDefault();

    if (!this.makeSimpleValidate()) {
      return;
    }

    if (!this.props.onLogin)
      throw new Error("No onLogin callback in login-form component");

    var {login, password} = this.state;

    this.props.onLogin({
      username: login,
      password
    });
  }

  render () {
    return (
      <div className="page-block page-login-form">
        <form className="login-form">
          <input
            type="text"
            className="login-form__input"
            placeholder="Логин"
            onBlur={this.handleBlur}
          />
          <input
            type="password"
            className="login-form__input"
            placeholder="Пароль"
            onBlur={this.handleBlur}
          />
          <button
            className="page-button login-form__button"
            onClick={this.handleLogin}
          >
            Войти
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;