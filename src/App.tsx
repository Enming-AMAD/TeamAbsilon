import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Main, NotFound } from "./pages";
import './App.css';

import logo from "./images/logo.png"

import NavigatorBar from "./pages/public/Navigator"

class App extends Component {
  render() {
    return (
      <div className="root">
        <BrowserRouter>
          <NavigatorHead></NavigatorHead>
          <Switch>
            <Route path="/" exact component={Main} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

class NavigatorHead extends Component {
  render() {
    return (
      <div className="header">
        <div className="slogan">
          <ul>
            <li>
              <img className="logo" alt="" src={logo} />
            </li>
            <li>
              <span className="name">
                팀 앱사일론<br></br>Team Absilon
              </span>
            </li>
          </ul>
        </div>
        <ul className="tabsContainer">
          {NavigatorBar}
        </ul>
      </div>
    )
  }
}

export default App;