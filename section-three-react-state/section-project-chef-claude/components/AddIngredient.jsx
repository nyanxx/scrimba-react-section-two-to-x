export default function AddIngredient() {
  return (
    <form className="add-ingredient">
      <input
        id="input-ingredient"
        name="input-ingredient"
        aria-label="Enter ingredient"
        type="text"
        className="input-ingredient"
        placeholder="e.g. oregano"
      />
      <button
        id="btn-add-ingredient"
        aria-label="Add ingredient"
        name="btn-add-ingredient"
        className="btn-add-ingredient"
      >
        Add ingredient
      </button>
      {/* <button className="btn-add-ingredient">+ Add Ingredient</button> */}
    </form>
  );
}
