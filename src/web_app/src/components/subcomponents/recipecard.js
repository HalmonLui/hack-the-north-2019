import React, { Component } from "react";

class Recipecard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
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
            <p>{this.props.details}</p>
            <p>{this.props.details}</p>
          </div>
          <div className="recipecard-cost-container">
            <p>$20</p>
            <p>*****</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Recipecard;
