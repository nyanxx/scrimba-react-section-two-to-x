import { useState } from "react";
import IngredientList from "./IngredientList";
import GetRecipe from "./GetRecipe";
import ClaudeRecipe from "./ClaudeRecipe";
import { getRecipeFromMistral } from "../ai";

/**
 * Challenge: Get a recipe from the AI!
 *
 * This will be a bit harder of a challenge that will require you
 * to think critically and synthesize the skills you've been
 * learning and practicing up to this point.
 *
 * Using either the `getRecipeFromChefClaude` function or the
 * `getRecipeFromMistral` function, make it so that when the user
 * clicks "Get a recipe", the text response from the AI is displayed
 * in the <ClaudeRecipe> component.
 *
 * For now, just have it render the raw markdown that the AI returns,
 * don't worry about making it look nice yet. (We're going to use a
 * package that will render the markdown for us soon.)
 */

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
        <GetRecipe
          toggleRecipeShown={toggleRecipeShown}
          getRecipeFromMistral={getRecipeFromMistral}
          ingredients={ingredients}
        />
      )}
      {recipeShown && <ClaudeRecipe />}
    </main>
  );
}
