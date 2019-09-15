import React, { Component } from "react";

class Lasagna extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0
    };
  }
  nextStep() {
    this.setState({ step: this.state.step++ });
    console.log(this.state.step);
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
        <h2>Steps</h2>
        <button onClick={this.nextStep.bind(this)}>Next</button>
        {this.state.step == "1" && (
          <div>
            <p>
              1. Preheat oven to 350 degrees F (175 degrees C). Bring a large
              pot of lightly salted water to a boil. Cook lasagna noodles in
              boiling water for 8 to 10 minutes. Drain, and rinse with cold
              water.
            </p>
            <img src="https://reviewed-com-res.cloudinary.com/image/fetch/s--lm7imI2e--/b_white,c_limit,cs_srgb,f_auto,fl_progressive.strip_profile,g_center,q_auto,w_792/https://reviewed-production.s3.amazonaws.com/attachment/98c2ea086c2d4ccc/Preheat_ovens_2.png" />
          </div>
        )}
        {this.state.step == "2" && (
          <div>
            <p>
              2. Melt the butter in a large saucepan over medium heat. Cook the
              onion and garlic in the butter until tender, stirring frequently.
              Stir in the flour and salt, and simmer until bubbly. Mix in the
              broth and milk, and boil, stirring constantly, for 1 minute. Stir
              in 2 cups mozzarella cheese and 1/4 cup Parmesan cheese. Season
              with the basil, oregano, and ground black pepper. Remove from
              heat, and set aside.
            </p>
            <img src="https://www.wikihow.com/images/thumb/8/86/Melt-Butter-Step-5-Version-2.jpg/aid1787465-v4-728px-Melt-Butter-Step-5-Version-2.jpg" />
          </div>
        )}
        {this.state.step == "3" && (
          <div>
            <p>
              3. Spread 1/3 of the sauce mixture in the bottom of a 9x13 inch
              baking dish. Layer with 1/3 of the noodles, the ricotta, and the
              chicken. Arrange 1/3 of the noodles over the chicken, and layer
              with 1/3 of the sauce mixture, spinach, and the remaining 2 cups
              mozzarella cheese and 1/2 cup Parmesan cheese. Arrange remaining
              noodles over cheese, and spread remaining sauce evenly over
              noodles. Sprinkle with parsley and 1/4 cup Parmesan cheese.
            </p>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOabgkaPjmX4OVC26ajuk3Z9CRHbRTUry4YU1YtR3XhwoNywBmFg" />
          </div>
        )}
        {this.state.step == "4" && (
          <div>
            <p>4. Bake 35 to 40 minutes in the preheated oven.</p>
            <img src="https://chocolatecoveredkatie.com/wp-content/uploads/2017/01/lasagna-vegan.jpg" />
          </div>
        )}
      </div>
    );
  }
}
export default Lasagna;
