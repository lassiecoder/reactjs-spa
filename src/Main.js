import React,{ Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Route from "react-router-dom/Route";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Error from "./Error";
export default class Main extends React.Component{
    render(){
        return(
            <Router>
                <div>
                    <Route path="/" component={Login} exact strict/>
                    <Route path="/dashboard" component={Dashboard} exact strict/>
                    <Route path="/error" component={Error} exact strict/>
                </div>
            </Router>
        )
    }
};