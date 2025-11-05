export default function AddIngredient() {
  const ingredients = ["Chicken", "Oregano", "Tomatoes"];

  const listIngredients = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

    /**
     * Chef Claude: Map ingredients list Challenge 3:
     * Add the new ingredient to the array of ingredients. Also, add a 
     * console.log(ingredients) after adding the ingredient, because 
     * **warning**: you aren't going to see the page update!
     * 
     * Hint: this is a one-liner solution, so don't overthink it 😅
     */

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");
    // console.log(newIngredient);
    ingredients.push(newIngredient)
    console.log(ingredients)
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
