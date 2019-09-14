import React, { Component } from "react";
import Recipecard from "./subcomponents/recipecard";

class Recipes extends Component {
  render() {
    return (
      <div className="recipe">
        <h1>Recipes</h1>
        <h2>Chinese</h2>
        <div className="home-recipes-container">
          <Recipecard />
          <Recipecard />
          <Recipecard />
          <Recipecard />
        </div>
        <h2>Korean</h2>
        <div className="home-recipes-container">
          <Recipecard />
          <Recipecard />
          <Recipecard />
          <Recipecard />
        </div>
        <h2>Italian</h2>
        <div className="home-recipes-container">
          <Recipecard />
          <Recipecard />
          <Recipecard />
          <Recipecard />
        </div>
      </div>
    );
  }
}
export default Recipes;
