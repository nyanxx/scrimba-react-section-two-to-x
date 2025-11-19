import { useState } from "react";
import IngredientList from "./IngredientList";
import GetRecipe from "./GetRecipe";
import ClaudeRecipe from "./ClaudeRecipe";

export default function Main() {
  const [ingredients, setIngredients] = useState([
    "all the main spices",
    "pasta",
    "ground beef",
    "tomato paste",
  ]);

  function addIngredient(formData) {
    formData.get("ingredient") !== ""
      ? setIngredients((prevIngredients) => {
          return [...prevIngredients, formData.get("ingredient")];
        })
      : console.log("Add some ingredients");
  }

  /**
   * Chef Claude challenge: refactor to separate components:
   * clean up our code!
   * Let's make a couple new components to make things a
   * little cleaner. (Notice: I'm not suggesting what we
   * have now is bad or wrong. I'm mostly finding an excuse
   * to get in some hands-on practice 🙂)
   *
   * 1. Move the entire recipe <section> into its own
   *    ClaudeRecipe component [√]
   * 2. Move the list of ingredients <section> into its
   *    own IngredientsList component. [√]
   *
   * While you're considering how to structure things, consider
   * where state is, think about if it makes sense or not to
   * move it somewhere else, how you'll communicate between
   * the parent/child components, etc.
   *
   * The app should function as it currently does when you're
   * done, so there will likely be some extra work to be done
   * beyond what I've listed above.
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
      {ingredients.length > 0 && <IngredientList ingredients={ingredients} />}
      {ingredients.length > 3 && (
        <GetRecipe toggleRecipeShown={toggleRecipeShown} />
      )}
      {recipeShown && <ClaudeRecipe />}
    </main>
  );
}
