import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./components/items/home";
import sell from "./components/pages/sell";
import buy from "./components/pages/buy";

class App extends Component {
  render() {
    return (
      <div>
        {/* <Home /> */}
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/sell" component={sell} />
            <Route exact path="/buy" component={buy} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
