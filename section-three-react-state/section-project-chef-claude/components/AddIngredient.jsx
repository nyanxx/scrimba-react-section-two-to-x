export default function AddIngredient() {
  const ingredients = ["Chicken", "Oregano", "Tomatoes"];

  /**
   * Chef Claude: Map ingredients list Review Challenge:
   * Map over the list of ingredients and render them as list items
   *
   * Note: We're doing things a weird way here. Don't worry,
   * we're building up to learning the right way 🙂
   */
  return (
    <>
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
      </form>
      <ul></ul>
    </>
  );
}
