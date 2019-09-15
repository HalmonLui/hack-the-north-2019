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
          title="Spicy Baked Tofu"
          imagesrc="https://images.media-allrecipes.com/userphotos/300x300/2258469.jpg"
          servings="4"
          time="1h 45m"
          cost="21.00"
          rating="4.5"
        />
        <Recipecard
          title="Japanese Chicken Wings"
          imagesrc="https://images.media-allrecipes.com/userphotos/300x300/4154813.jpg"
          servings="6"
          time="1h"
          cost="18.00"
          rating="4.7"
        />
        <Recipecard
          title="Mulligatawny Soup I"
          imagesrc="https://images.media-allrecipes.com/userphotos/300x300/3573231.jpg"
          servings="6"
          time="1h 20m"
          cost="23.00"
          rating="4.8"
        />
        <Recipecard
          title="Chicken Tikka Masala"
          imagesrc="https://images.media-allrecipes.com/userphotos/300x300/39905.jpg"
          servings="4"
          time="2h 20m"
          cost="25.00"
          rating="4.4"
        />
        <Recipecard
          title="The Best Thai Coconut Soup"
          imagesrc="https://images.media-allrecipes.com/userphotos/300x300/6609476.jpg"
          servings="8"
          time="1h 5m"
          cost="17.00"
          rating="4.6"
        />
        <Recipecard
          title="Peanut Butter Noodles"
          imagesrc="https://images.media-allrecipes.com/userphotos/300x300/422062.jpg"
          servings="4"
          time="25m"
          cost="10.00"
          rating="4"
        />
        </div>
        <h2>European</h2>
        <div className="home-recipes-container">
          <Recipecard
            title="Beef Stroganoff III"
            imagesrc="https://images.media-allrecipes.com/userphotos/300x300/6609476.jpg"
            servings="8"
            time="1h 40m"
            cost="24.00"
            rating="4.7"
          />
          <Recipecard
            title="Double Tomato Bruschetta"
            imagesrc="https://images.media-allrecipes.com/userphotos/300x300/4542188.jpg"
            servings="12"
            time="35m"
            cost="19.50"
            rating="4.8"
          />
          <Recipecard
            title="Swedish Sticky Chocolate Cake (Kladdkaka)"
            imagesrc="https://images.media-allrecipes.com/userphotos/300x300/944202.jpg"
            servings="12"
            time="1h 45m"
            cost="13.50"
            rating="4.6"
          />
          <Recipecard
            title="Basic Crepes"
            imagesrc="https://images.media-allrecipes.com/userphotos/300x300/1266.jpg"
            servings="4"
            time="30m"
            cost="13.00"
            rating="4.6"
          />
          <Recipecard
            title="Norwegian Pancakes - Pannekaken"
            imagesrc="https://images.media-allrecipes.com/userphotos/300x300/371619.jpg"
            servings="6"
            time="20m"
            cost="11.00"
            rating="4.6"
          />
          <Recipecard
            title="Jagerschnitzel"
            imagesrc="https://images.media-allrecipes.com/userphotos/300x300/433.jpg"
            servings="4"
            time="40m"
            cost="16.00"
            rating="4.6"
          />
        </div>
      </div>
    );
  }
}
export default Home;
