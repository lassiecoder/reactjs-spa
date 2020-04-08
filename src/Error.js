import React, { Component } from "react";
export default class Error extends React.Component {
  render() {
    return (
      <div className="container">
        <fieldset>
          <legend>Error</legend>
          <div className="formContainer">
            <h2> Login failed...!! </h2>
          </div>
        </fieldset>
      </div>
    );
  }
}
