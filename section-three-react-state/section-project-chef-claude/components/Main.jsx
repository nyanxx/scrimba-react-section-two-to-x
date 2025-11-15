import { useState } from "react";

export default function Main() {
  const [ingredients, setIngredients] = useState([]);

  const listIngredients = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  function addIngredient(formData) {
    setIngredients((prevIngredients) => {
      return [...prevIngredients, formData.get("ingredient")];
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
      <ul>{listIngredients}</ul>
      <section className="ingredient-on-hands">
        <h2>Ingredient on hand:</h2>
        <ul>
          <li>item x</li>
          <li>item x</li>
          <li>item x</li>
          <li>item x</li>
          <li>item x</li>
          <li>item x</li>
        </ul>
      </section>
      <section className="get-recipe">
        <div>
          <h3>Ready for a recipe?</h3>
          <p>Generate a recipe from your list of ingredients</p>
        </div>
        <button>Get a recipe</button>
      </section>
    </main>
  );
}
