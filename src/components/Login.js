import React, { Component } from "react";
import "../css/Login.css";
import { withRouter } from "react-router-dom";

class Login extends Component {
  constructor() {
    super();
    this.onLoginSubmit = this.onLoginSubmit.bind(this);
  }
  onLoginSubmit(event) {
    event.preventDefault();

    let username = event.target["username"].value;
    let password = event.target["password"].value;

    let user = {
      username: username,
      password: password,
    };

    let userInJson = JSON.stringify(user);

    fetch("http://127.0.0.1:8000/api/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: userInJson,
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        this.props.history.push("/articles");
        localStorage.setItem("user_id", response.user_id);
      });
  }
  render() {
    const { onLogin } = this.props;
    return (
      <div>
        <img
          className="img-background"
          src="https://wallup.net/wp-content/uploads/2014/10/animal/Cat_And_Dog_Kissing.jpg"
        />
        <div className="form-login">
          <h1 className="text-title">Login</h1>
          <form onSubmit={this.onLoginSubmit}>
            <label>Username</label>
            <input
              type="text"
              name="username"
              className="input-login"
              placeholder="username.."
            />

            <label>Password</label>
            <input
              type="password"
              name="password"
              className="input-login"
              placeholder="password.."
            />

            <a href="#">Forgot your password?</a>

            <button className="btn-login" type="submit" onClick={onLogin}>
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}
export default withRouter(Login);
