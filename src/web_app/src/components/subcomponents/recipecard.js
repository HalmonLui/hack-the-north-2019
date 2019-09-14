import React, { Component } from "react";

class Recipecard extends Component {
  render() {
    return (
      <div className="recipecard">
        <h2>I AM RECIPE CARD</h2>
        <img
          src={"https://i.imgur.com/sohWhy9.png"}
          alt="pikachu face"
          className="recipecard-image"
        />
        <p>Insert details here</p>
      </div>
    );
  }
}
export default Recipecard;
