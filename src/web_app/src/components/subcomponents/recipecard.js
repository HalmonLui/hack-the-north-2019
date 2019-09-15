import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

class Recipecard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <Link className="recipeLink" to={this.props.toLink}>
          <div className="recipecard">
            <div className="recipecard-image-container">
              <img
                src={this.props.imagesrc}
                alt="pikachu face"
                className="recipecard-image"
              />
            </div>
            <div className="recipecard-text-container">
              <h2>{this.props.title}</h2>
              <div className="recipecard-servedata-container">
                <p>{this.props.servings} Servings</p>
                <p>{this.props.time}</p>
              </div>
              <div className="recipecard-cost-container">
                <p>${this.props.cost}</p>
                <p>{this.props.rating}/5</p>
              </div>
            </div>
          </div>
        </Link>
      </Router>
    );
  }
}
export default Recipecard;
