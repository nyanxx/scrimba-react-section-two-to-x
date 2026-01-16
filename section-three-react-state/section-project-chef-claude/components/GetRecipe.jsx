import ClaudeRecipe from "./ClaudeRecipe";
import { useState } from "react";
export default function GetRecipe(props) {
  const [recipe, setRecipe] = useState("");

  async function handleClick() {
    const data = await props.getRecipeFromMistral(props.ingredients);
    setRecipe(data);
  }

  return (
    <>
      <section className="get-recipe">
        <div>
          <h3>Ready for a recipe?</h3>
          <p>Generate a recipe from your list of ingredients</p>
        </div>
        <button className="get-recipe-btn" onClick={handleClick}>
          Get a recipe
        </button>
      </section>
      {recipe && <ClaudeRecipe recipe={recipe} />}
    </>
  );
}

/**

Based on the ingredients you have on hand, I recommend making a simple and delicious **Ground Beef Spaghetti Bolognese**. Here's the recipe:

```markdown
## Recipe: Ground Beef Spaghetti Bolognese

**Serves:** 4-5

**Ingredients:**
- 1 pound (450g) spaghetti
- 1 1/2 pound (680g) ground beef
- 1 onion, finely chopped
- 2 carrots, finely chopped (optional)
- 2 stalks of celery, finely chopped (optional)
- 1-2 cloves garlic, minced
- 1 can (28 oz/793g) tomato paste
- 1 can (15 oz/425g) crushed tomatoes
- 1 can (14.5 oz/411g) diced tomatoes
- 1 cup (235ml) red wine (optional)
- 1 tbsp olive oil
- Salt to taste
- Ground black pepper to taste
- 1 tsp red pepper flakes (optional)
- 1 tbsp sugar (optional)
- Freshly grated Parmesan cheese for serving
- Fresh basil leaves for garnish

**Instructions:**

1. Cook pasta according to package instructions In a large pot, heat olive oil over medium heat. Add ground beef and cook until browned stirring occasionally.

2. Transfer cooked beef to a plate and set aside. In the same pot, add onions, carrots, celery and garlic. Sauté until softened, about 5 minutes. You may need to add a little more oil if needed.

3. Add tomato paste, crushed tomatoes, and diced tomatoes into the pot; bring to a simmer. Whether using wine or not, deglaze the pot by adding it to the sauce and reducing by half before proceeding.

4. Add cooked ground beef back into the pot, along with any juices that have accumulated. Season the sauce sparingly with salt, pepper, red pepper flakes, and sugar - tasting as you go along. Stir in water as needed to adjust consistency.

5. Cook pasta to al dente. Drain pasta, reserving some of the pasta water.

6. Transfer cooked pasta into the pot with the sauce and allow it to absorb the flavors of the sauce for 1-2 minutes. Adjust seasonings as needed. Serve the pasta in bowls, topped with freshly grated parmesan cheese and basil leaves.
```
This recipe provides you with a delicious and hearty meal by using your main ingredients, while also introducing a few fresh vegetables to add texture and nutrition. Enjoy your cooking!
 */
