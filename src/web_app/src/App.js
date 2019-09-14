import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/home";
import Recipes from "./components/recipes";
import Voice from "./components/voice";
import Navbar from "./components/navbar";
import "./App.css";

class App extends Component {
  openSlideMenu = function() {
    var element = document.getElementById("side-menu");
    element.style.width = "250px";
  };
  closeSlideMenu = function() {
    var element = document.getElementById("side-menu");
    element.style.width = "0px";
  };
  render() {
    return (
      <Router>
        <nav className="navbar">
          <span className="open-slide">
            <p onClick={this.openSlideMenu}>
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
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/recipes">Recipes</Link>
            </li>
            <li>
              <Link to="/voice">Voice</Link>
            </li>
          </ul>
        </div>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/recipes" component={Recipes} />
          <Route path="/voice" component={Voice} />
        </div>
      </Router>
    );
  }
}

export default App;
