import { useState } from "react";

export default function Main() {
  const [ingredients, setIngredients] = useState([
    "all the main spices",
    "pasta",
    "ground beef",
    "tomato paste",
  ]);

  const listIngredients = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  function addIngredient(formData) {
    formData.get("ingredient") !== ""
      ? setIngredients((prevIngredients) => {
          return [...prevIngredients, formData.get("ingredient")];
        })
      : console.log("Add some ingredients");
  }

  /**
   * Chef Claude: Get recipe placeholder challenge:
   * 1. Create a boolean state that, for now, will represent whether
   *    we've gotten a recipe back from the "chef". Default to `false`.
   *    Can call it `recipeShown`. [√]
   * 2. Grab the markup in recipeCode.md and paste it below. This will
   *    be a placeholder for the content that will come back from the
   *    chef once we set up that feature. [√]
   * 3. When the user clicks the "Get a recipe" button, flip the
   *    `recipeShown` state to true. [√]
   * 4. Only display the recipe code content if `recipeShown` is true. [√]
   */

  const [recipeShown, setRecipeShown] = useState(false);

  function toggleRecipeShown(event) {
    setRecipeShown((prevState) => {
      return !prevState;
    });
  }

  return (
    <main>
      <form className="add-ingredient" action={addIngredient}>
        <input
          id="input-ingredient"
          name="ingredient"
          aria-label="Enter ingredient"
          type="text"
          className="input-ingredient"
          placeholder="e.g. oregano"
        />
        <button
          id="btn-add-ingredient"
          aria-label="Add ingredient"
          name="add-ingredient"
          className="btn-add-ingredient"
        >
          Add ingredient
        </button>
      </form>
      {ingredients.length > 0 && (
        <section className="ingredient-on-hands">
          <h2>Ingredient on hand:</h2>
          <ul>{listIngredients}</ul>
        </section>
      )}
      {ingredients.length > 3 && (
        <section className="get-recipe">
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients</p>
          </div>
          <button className="get-recipe-btn" onClick={toggleRecipeShown}>
            Get a recipe
          </button>
        </section>
      )}
      {recipeShown && (
        <section className="show-recipe">
          <h2>Chef Claude Recommends:</h2>
          <article className="suggested-recipe-container" aria-live="polite">
            <p>
              Based on the ingredients you have available, I would recommend
              making a simple a delicious <strong>Beef Bolognese Pasta</strong>.
              Here is the recipe:
            </p>
            <h3>Beef Bolognese Pasta</h3>
            <strong>Ingredients:</strong>
            <ul>
              <li>1 lb. ground beef</li>
              <li>1 onion, diced</li>
              <li>3 cloves garlic, minced</li>
              <li>2 tablespoons tomato paste</li>
              <li>1 (28 oz) can crushed tomatoes</li>
              <li>1 cup beef broth</li>
              <li>1 teaspoon dried oregano</li>
              <li>1 teaspoon dried basil</li>
              <li>Salt and pepper to taste</li>
              <li>
                8 oz pasta of your choice (e.g., spaghetti, penne, or linguine)
              </li>
            </ul>
            <strong>Instructions:</strong>
            <ol>
              <li>
                Bring a large pot of salted water to a boil for the pasta.
              </li>
              <li>
                In a large skillet or Dutch oven, cook the ground beef over
                medium-high heat, breaking it up with a wooden spoon, until
                browned and cooked through, about 5-7 minutes.
              </li>
              <li>
                Add the diced onion and minced garlic to the skillet and cook
                for 2-3 minutes, until the onion is translucent.
              </li>
              <li>Stir in the tomato paste and cook for 1 minute.</li>
              <li>
                Add the crushed tomatoes, beef broth, oregano, and basil. Season
                with salt and pepper to taste.
              </li>
              <li>
                Reduce the heat to low and let the sauce simmer for 15-20
                minutes, stirring occasionally, to allow the flavors to meld.
              </li>
              <li>
                While the sauce is simmering, cook the pasta according to the
                package instructions. Drain the pasta and return it to the pot.
              </li>
              <li>
                Add the Bolognese sauce to the cooked pasta and toss to combine.
              </li>
              <li>
                Serve hot, garnished with additional fresh basil or grated
                Parmesan cheese if desired.
              </li>
            </ol>
          </article>
        </section>
      )}
    </main>
  );
}
