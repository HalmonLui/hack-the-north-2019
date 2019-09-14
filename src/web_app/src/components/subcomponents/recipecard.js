import React, { Component } from "react";

class Recipecard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="recipecard">
        <h2>{this.props.title}</h2>
        <img
          src={this.props.imagesrc}
          alt="pikachu face"
          className="recipecard-image"
        />
        <p>{this.props.details}</p>
      </div>
    );
  }
}
export default Recipecard;
