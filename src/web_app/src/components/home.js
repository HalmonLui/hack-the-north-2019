import React, { Component } from "react";
import Recipecard from "./subcomponents/recipecard";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <h1>Welcome to FOOD BOI</h1>
        <h2>Recipe</h2>
        <div className="home-recipes-container">
          <Recipecard
            title="Pikachu"
            details="subtleasiantraits"
            imagesrc="https://i.imgur.com/sohWhy9.jpg"
          />
          <Recipecard
            title="Pikachu"
            details="subtleasiantraits"
            imagesrc="https://i.imgur.com/sohWhy9.jpg"
          />
          <Recipecard
            title="Pikachu"
            details="subtleasiantraits"
            imagesrc="https://i.imgur.com/sohWhy9.jpg"
          />
          <Recipecard
            title="Pikachu"
            details="subtleasiantraits"
            imagesrc="https://i.imgur.com/sohWhy9.jpg"
          />
        </div>
        <h2>Recently Viewed</h2>
        <div className="home-recipes-container">
          <Recipecard
            title="Pikachu"
            details="subtleasiantraits"
            imagesrc="https://i.imgur.com/sohWhy9.jpg"
          />
          <Recipecard
            title="Pikachu"
            details="subtleasiantraits"
            imagesrc="https://i.imgur.com/sohWhy9.jpg"
          />
          <Recipecard
            title="Pikachu"
            details="subtleasiantraits"
            imagesrc="https://i.imgur.com/sohWhy9.jpg"
          />
          <Recipecard
            title="Pikachu"
            details="subtleasiantraits"
            imagesrc="https://i.imgur.com/sohWhy9.jpg"
          />
        </div>
      </div>
    );
  }
}
export default Home;
