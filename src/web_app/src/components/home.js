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
            title="Exquisite Pizza Sauce"
            imagesrc="https://images.media-allrecipes.com/userphotos/300x300/744818.jpg"
            servings="4"
            time="40m"
            cost="9.00"
            rating="4.6"
          />
          <Recipecard
            title="White Cheese Chicken Lasagna"
            imagesrc="https://images.media-allrecipes.com/userphotos/300x300/735349.jpg"
            servings="12"
            time="1hr 15m"
            cost="14.00"
            rating="4.4"
          />
          <Recipecard
            title="Double Tomato"
            imagesrc="https://images.media-allrecipes.com/userphotos/300x300/4542188.jpg"
            servings="12"
            time="35m"
            cost="5.00"
            rating="4.8"
          />
          <Recipecard
            title="Slow Cooker Italian Beef for Sandwiches"
            imagesrc="https://images.media-allrecipes.com/userphotos/300x300/178087.jpg"
            servings="10"
            time="12h 15m"
            cost="30.00"
            rating="4.6"
          />
          <Recipecard
            title="Affogato with Cold-Brewed Coffee"
            imagesrc="https://images.media-allrecipes.com/userphotos/300x300/4067575.jpg"
            servings="2"
            time="12h 5m"
            cost="22.00"
            rating="4.7"
          />
          <Recipecard
            title="Balsamic Roasted Pork Loin"
            imagesrc="https://images.media-allrecipes.com/userphotos/300x300/1015071.jpg"
            servings="8"
            time="3h 5m"
            cost="13.00"
            rating="4.6"
          />
        </div>
        <h2>Spanish</h2>
        <div className="home-recipes-container">
          <Recipecard
            title="Sangria! Sangria!"
            imagesrc="https://images.media-allrecipes.com/userphotos/300x300/180286.jpg"
            servings="6"
            time="30m"
            cost="17.00"
            rating="4.8"
          />
          <Recipecard
            title="Easy Paella"
            imagesrc="https://images.media-allrecipes.com/userphotos/300x300/886465.jpg"
            servings="8"
            time="1h"
            cost="15.00"
            rating="4.6"
          />
          <Recipecard
            title="Spanish Flan"
            imagesrc="https://images.media-allrecipes.com/userphotos/300x300/6292085.jpg"
            servings="8"
            time="1h 20m"
            cost="20.00"
            rating="4.4"
          />
          <Recipecard
            title="White Peach Sangria"
            imagesrc="https://images.media-allrecipes.com/userphotos/300x300/417474.jpg"
            servings="6"
            time="2h 10m"
            cost="16.00"
            rating="4.7"
          />
          <Recipecard
            title="Broiled Spanish Mackerel"
            imagesrc="https://images.media-allrecipes.com/userphotos/300x300/2973067.jpg"
            servings="6"
            time="15m"
            cost="13.00"
            rating="4.7"
          />
          <Recipecard
            title="Chef John's Patatas Bravas"
            imagesrc="https://images.media-allrecipes.com/userphotos/300x300/962666.jpg"
            servings="4"
            time="1h 30m"
            cost="18.00"
            rating="4.6"
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
