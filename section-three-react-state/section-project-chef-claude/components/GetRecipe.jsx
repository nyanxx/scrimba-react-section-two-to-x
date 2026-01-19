import ClaudeRecipe from "./ClaudeRecipe";
import { useEffect, useRef, useState } from "react";

export default function GetRecipe(props) {
  const [recipe, setRecipe] = useState();

  async function handleClick() {
    const data = await props.getRecipeFromMistral(props.ingredients);
    setRecipe(data);
  }

  const getRecipeRef = useRef(null);

  /**
   * Challenge:
   * Add a new effect that calls `recipeSection.current.scrollIntoView()`
   * only if recipe is not an empty string and recipeSection.current is not null.
   * Think carefully about what value(s) you would want to include in
   * the dependencies array.
   */

  useEffect(() => {
    recipe &&
      getRecipeRef.current &&
      getRecipeRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  }, [recipe]);

  return (
    <>
      <section className="get-recipe">
        <div ref={getRecipeRef}>
          <h3>Ready for a recipe?</h3>
          <p>Generate a recipe from your list of ingredients</p>
        </div>
        <button className="get-recipe-btn" onClick={handleClick}>
          Get a recipe
        </button>
      </section>
      {recipe && <ClaudeRecipe recipe={recipe} />}
      {/* {recipe &&
        getRecipeRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })} */}
    </>
  );
}
