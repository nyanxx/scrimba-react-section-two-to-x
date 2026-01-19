import ClaudeRecipe from "./ClaudeRecipe";
import { useRef, useState } from "react";

export default function GetRecipe(props) {
  const [recipe, setRecipe] = useState();

  async function handleClick() {
    const data = await props.getRecipeFromMistral(props.ingredients);
    setRecipe(data);
  }

  const getRecipeRef = useRef(null);

  // useEffect(() => {
  //   recipe &&
  //     getRecipeRef.current.scrollIntoView({
  //       behavior: "smooth",
  //       block: "start",
  //     });
  // }, [recipe]);

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
      {recipe &&
        getRecipeRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })}
    </>
  );
}
