export default function AddIngredient() {
  const ingredients = ["Chicken", "Oregano", "Tomatoes"];

  const listIngredients = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  /**
   * Chef Claude: Map ingredients list Challenge 2:
   * Add an `onSubmit` event listener on the form. Have the function
   * simply console.log("Form submitted!") for now
   */

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Form submitted!");
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
