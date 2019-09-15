import React, { Component } from "react";
import Recipecard from "./subcomponents/recipecard";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <h1>{global.name}</h1>
        <h2>Italian</h2>
        <div className="home-recipes-container">
          <Recipecard
            title="Tomato Sauce"
            imagesrc="https://images.media-allrecipes.com/userphotos/300x300/744818.jpg"
            servings="6"
            time="1h 30m"
            cost="15.00"
            rating="4.5"
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
        <h2>Spanish</h2>
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
        <h2>Chinese</h2>
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
        <h2>European</h2>
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
