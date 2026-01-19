import { useState } from "react";
import IngredientList from "./IngredientList";
import GetRecipe from "./GetRecipe";
import { getRecipeFromMistral } from "../ai";

export default function Main() {
  const [ingredients, setIngredients] = useState([
    "chicken",
    "chickdden",
    "chdicken",
    "chickend",
  ]);

  function addIngredient(formData) {
    formData.get("ingredient") !== ""
      ? setIngredients((prevIngredients) => {
          return [...prevIngredients, formData.get("ingredient")];
        })
      : console.log("Add some ingredients");
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
          getRecipeFromMistral={getRecipeFromMistral}
          ingredients={ingredients}
        />
      )}
    </main>
  );
}
