export default function GetRecipe(props) {
  return (
    <section className="get-recipe">
      <div>
        <h3>Ready for a recipe?</h3>
        <p>Generate a recipe from your list of ingredients</p>
      </div>
      <button className="get-recipe-btn" onClick={props.toggleRecipeShown}>
        Get a recipe
      </button>
    </section>
  );
}
