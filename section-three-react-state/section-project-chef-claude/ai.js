import { InferenceClient } from "@huggingface/inference";

const client = new InferenceClient(import.meta.env.VITE_HF_ACCESS_TOKEN, {
  provider: "huggingface",
});

export async function getRecipeFromMistral(ingredientsArr) {
  const ingredientsString = ingredientsArr.join(", ");
  const systemPrompt = `
  You are an assistant that receives a list of ingredients that a user has 
  and suggests a recipe they could make with some or all of those ingredients.
  You don't need to use every ingredient they mention in your recipe. 
  The recipe can include additional ingredients they didn't mention, 
  but try not to include too many extra ingredients. 
  Format response with the format given below same to same especially the hashtags to make it easier to render to a web page.
  Below is an example format -
  ## Dish Name

  ### Ingredients:

  - List of ingredients..

  ### Procedures:

  1. Steps / Procedures...
  `;
  const userPrompt = `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!`;
  try {
    console.log("Getting recipe from Mistral AI...");
    const response = await client.chatCompletion({
      model: "mistralai/Mistral-7B-Instruct-v0.2:featherless-ai",
      messages: [
        {
          role: "system",
          content: systemPrompt,
        },
        {
          role: "user",
          content: userPrompt,
        },
      ],
      max_new_tokens: 1024,
      temperature: 1.1,
      stop: ["```", "markdown"],
    });

    console.log("From ai.js > ", response);
    return response.choices[0].message.content;
  } catch (err) {
    console.error(err.message);
    console.log("Sorry, I couldn't generate a recipe.");
    return null;
  }
}
