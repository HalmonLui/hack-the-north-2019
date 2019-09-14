import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/home";
import Recipes from "./components/recipes";
import Voice from "./components/voice";
import Navbar from "./components/navbar";
import Login from "./components/login";
import "./App.css";

class App extends Component {
  openSlideMenu = function() {
    var element = document.getElementById("side-menu");
    element.style.width = "250px";
    var disp = document.getElementById("display");
    disp.style.marginLeft = "250px";
    var burger = document.getElementById("hamburger");
    burger.style.visibility = "hidden";
  };
  closeSlideMenu = function() {
    var element = document.getElementById("side-menu");
    element.style.width = "0px";
    var disp = document.getElementById("display");
    disp.style.marginLeft = "0px";
    var burger = document.getElementById("hamburger");
    burger.style.visibility = "visible";
  };
  render() {
    return (
      <Router>
        <nav className="navbar">
          <div className="userbar">
            <p>Notifs</p>
            <p>Profile</p>
          </div>
          <span className="open-slide">
            <p id="hamburger" onClick={this.openSlideMenu}>
              <svg width="30" height="30">
                <path d="M0,5 30,5" stroke="#000" stroke-width="5" />
                <path d="M0,14 30,14" stroke="#000" stroke-width="5" />
                <path d="M0,23 30,23" stroke="#000" stroke-width="5" />
              </svg>
            </p>
          </span>
        </nav>

        <div id="side-menu" className="side-nav">
          <p className="btn-close" onClick={this.closeSlideMenu}>
            &times;
          </p>
          <ul>
            <li>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/recipes">
                Recipes
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/voice">
                Voice
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
          </ul>
        </div>

        <div id="display" onClick={this.closeSlideMenu}>
          <Route exact path="/" component={Home} />
          <Route path="/recipes" component={Recipes} />
          <Route path="/voice" component={Voice} />
          <Route path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;
