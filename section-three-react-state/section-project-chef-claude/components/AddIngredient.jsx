export default function AddIngredient() {
  return (
    <section className="add-ingredient">
      <input
        id="input-ingredient"
        name="input-ingredient"
        type="text"
        className="input-ingredient"
        placeholder="e.g. oregano"
      />
      <input
        id="btn-add-ingredient"
        name="btn-add-ingredient"
        className="btn-add-ingredient"
        type="button"
        value="+ Add ingredient"
      />
      {/* <button className="btn-add-ingredient">+ Add Ingredient</button> */}
    </section>
  );
}
