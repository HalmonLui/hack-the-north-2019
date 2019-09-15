import React, { Component } from "react";
import Recipecard from "./subcomponents/recipecard";

class Recipes extends Component {
  render() {
    return (
      <div className="recipes">
        <h1>Discover</h1><br></br>
        <h2>Chinese</h2>
        <div className="home-recipes-container">
          <Recipecard
            title="Boba"
            imagesrc="https://cdn.abcotvs.com/dip/images/5342088_061119-kgo-boba-img.jpg?w=800&r=16%3A9"
            details="yummy"
          />
          <Recipecard
            title="Boba"
            imagesrc="https://boisedev.com/wp-content/uploads/2017/04/img-8.jpg"
            details="yummy"
          />
          <Recipecard
            title="Boba"
            imagesrc="https://d1dxs113ar9ebd.cloudfront.net/225batonrouge/2019/03/225KungFuTea-10.jpg?q=70&crop=faces&fit=crop&w=1200&h=550"
            details="yummy"
          />
        </div>
        <h2>Korean</h2>
        <div className="home-recipes-container">
          <Recipecard
            title="Fried Chicken"
            details="Yommy"
            imagesrc="https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/vimdb/270679.jpg"
          />
          <Recipecard
            title="Fried Chicken"
            details="Yommy"
            imagesrc="https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/vimdb/270679.jpg"
          />
          <Recipecard
            title="Fried Chicken"
            details="Yommy"
            imagesrc="https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/vimdb/270679.jpg"
          />
        </div>
        <h2>Italian</h2>
        <div className="home-recipes-container">
          <Recipecard
            title="Pasta"
            details="Yommy"
            imagesrc="https://www.budgetbytes.com/wp-content/uploads/2013/07/Creamy-Tomato-and-Spinach-Pasta-skillet-1-500x480.jpg"
          />
          <Recipecard
            title="Pasta"
            details="Yommy"
            imagesrc="https://www.budgetbytes.com/wp-content/uploads/2013/07/Creamy-Tomato-and-Spinach-Pasta-skillet-1-500x480.jpg"
          />
          <Recipecard
            title="Pasta"
            details="Yommy"
            imagesrc="https://www.budgetbytes.com/wp-content/uploads/2013/07/Creamy-Tomato-and-Spinach-Pasta-skillet-1-500x480.jpg"
          />
        </div>
      </div>
    );
  }
}
export default Recipes;
