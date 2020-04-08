import React, { Component } from "react";
import "./App.css";
export default class Dashboard extends React.Component {
  render() {
    return (
      <div className="container">
        <fieldset>
          <legend>Dashboard</legend>
          <div className="formContainer">
              <h2> Login successful...!! </h2>
          </div>
        </fieldset>
      </div>
    );
  }
}
