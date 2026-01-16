export default function GetRecipe(props) {
  async function handleClick() {
    const data = await props.getRecipeFromMistral(props.ingredients);
    console.log(data); // CodeMark
    // i need to also change the ai from text generation to chat completion
    // may be i can utilize the few shots approach to get optimal result
    // need to decide how the response from AI will be
  }

  return (
    <section className="get-recipe">
      <div>
        <h3>Ready for a recipe?</h3>
        <p>Generate a recipe from your list of ingredients</p>
      </div>
      <button className="get-recipe-btn" onClick={handleClick}>
        {/* <button className="get-recipe-btn" onClick={props.toggleRecipeShown} onClick>F */}
        Get a recipe
      </button>
    </section>
  );
}
