import { useState } from "react";

export default function AddIngredient() {
  const [ingredients, setIngredients] = useState([]);

  const listIngredients = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  /**
   * Chef Claude: Refactor array state challenge: Update our app so that when the user enters a
   * new ingredient and submits the form, it adds that new
   * ingredient to our list!
   */

  function handleSubmit(event) {
    /**
     * Like before, don't worry about this FormData stuff yet.
     * Just use the newIngredient below to help you finish the
     * challenge.
     */
    event.preventDefault();
    const formData = new FormData(event.target);
    setIngredients((prevData) => [...prevData, formData.get("ingredient")]);
  }

  return (
    <>
      <form className="add-ingredient" onSubmit={handleSubmit}>
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
