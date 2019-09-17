import React, { Component } from "react";

class Lasagna extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1
    };
  }
  componentDidMount() {
    setTimeout(function() {
      window.location.reload();
      console.log("cool");
    }, 20000);
    console.log("stuff");
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <div className="recipepage">
        <h1>White Cheese Chicken Lasagna</h1>
        <img src="https://tastykitchen.com/wp-content/uploads/2013/01/Tasty-Kitchen-Blog-White-Cheese-and-Chicken-Lasagna.jpg" />
        <h2>Overview</h2>
        <div>
          <p>12 Servings</p>
          <p>1hr 15m</p>
        </div>
        <h2>Ingredients</h2>
        <div id="ingredients">
          <p>9 lasagna noodles</p>
          <p>½ cup butter</p>
          <p>1 onion, chopped</p>
          <p>½ cup all-purpose flour</p>
          <p>1 clove garlic, minced</p>
          <p>1 teaspoon salt</p>
          <p>2 cups chicken broth</p>
          <p>1 ½ cups milk</p>
          <p>4 cups shredded mozzarella cheese, divided</p>
          <p>1 cup grated Parmesan cheese, divided</p>
        </div>
        <iFrame
          id={this.state.step}
          className="iframe"
          src="https://greenman.serveo.net"
        />
      </div>
    );
  }
}
export default Lasagna;
