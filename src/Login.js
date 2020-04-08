import React, { Component } from "react";
import axios from "axios";
export default class Login extends React.Component {
  render() {
    return (
      <div className="container">
        <fieldset>
          <legend>Login</legend>
          <div className="formContainer">
            <input
              type="text"
              name="uname"
              placeholder="User name"
              ref="uname"
            />
            <br></br>
            <input
              type="password"
              name="upwd"
              placeholder="Password"
              ref="upwd"
            />
            <br></br>

            <button className="loginBtn" onClick={this.login}>
              Login
            </button>
          </div>
        </fieldset>
      </div>
    );
  }
  login = () => {
    let obj = {
      uname: this.refs.uname.value,
      upwd: this.refs.upwd.value,
    };
    axios.post("http://localhost:8080/login", obj).then(
      (posRes) => {
        if (posRes.data.login == "success") {
          this.props.history.push("/dashboard");
        } else {
          this.props.history.push("/error");
        }
      },
      (errRes) => {
        console.log(errRes);
      }
    );
  };
}
