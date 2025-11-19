export default function IngredientList(props) {
  const listIngredients = props.ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));
  return (
    <section className="ingredient-on-hands">
      <h2>Ingredient on hand:</h2>
      <ul>{listIngredients}</ul>
    </section>
  );
}
