import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/home";
import Recipes from "./components/recipes";
import Voice from "./components/voice";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={Homepage} />
        <Route path="/recipes" component={Recipepage} />
        <Route path="/voice" component={Voicepage} />
      </div>
    </Router>
  );
}

function Homepage() {
  return <Home />;
}

function Recipepage() {
  return <Recipes />;
}

function Voicepage() {
  return <Voice />;
}

function Header() {
  return (
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
  );
}

export default App;
