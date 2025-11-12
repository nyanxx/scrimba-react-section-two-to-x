import { useState } from "react";

export default function AddIngredient() {
  const [ingredients, setIngredients] = useState([]);

  const listIngredients = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  /**
   * Chef Claude: Refactor form submission challenge: use form action instead of onSubmit to
   * handle the data from the form
   */

  function addIngredient(formData) {
    setIngredients((prevIngredients) => {
      return [...prevIngredients, formData.get("ingredient")];
    });
  }

  return (
    <>
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
    </>
  );
}
