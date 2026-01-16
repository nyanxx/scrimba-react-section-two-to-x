// import Anthropic from "@anthropic-ai/sdk";
// import { HfInference } from "@huggingface/inference"; // Depceriated: For backward compatibility only, will remove soon. - https://huggingface.co/docs/huggingface.js/en/inference/classes/HfInference
import { InferenceClient } from "@huggingface/inference";
// npm or pnpm the above package

// 🚨👉 ALERT: Read message below! You've been warned! 👈🚨
// If you're following along on your local machine instead of
// here on Scrimba, make sure you don't commit your API keys
// to any repositories and don't deploy your project anywhere
// live online. Otherwise, anyone could inspect your source
// and find your API keys/tokens. If you want to deploy
// this project, you'll need to create a backend of some kind,
// either your own or using some serverless architecture where
// your API calls can be made. Doing so will keep your
// API keys private.

// const anthropic = new Anthropic({
//   // Make sure you set an environment variable in Scrimba
//   // for ANTHROPIC_API_KEY
//   apiKey: process.env.ANTHROPIC_API_KEY,

//   dangerouslyAllowBrowser: true,
// });

// export async function getRecipeFromChefClaude(ingredientsArr) {
//   const ingredientsString = ingredientsArr.join(", ");

//   const msg = await anthropic.messages.create({
//     model: "claude-3-haiku-20240307",
//     max_tokens: 1024,
//     system: SYSTEM_PROMPT,
//     messages: [
//       {
//         role: "user",
//         content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!`,
//       },
//     ],
//   });
//   return msg.content[0].text;
// }

// Make sure you set an environment variable in Scrimba
// for HF_ACCESS_TOKEN
const client = new InferenceClient(import.meta.env.VITE_HF_ACCESS_TOKEN, {
  provider: "huggingface", // Force the provider to Hugging Face
});

export async function getRecipeFromMistral(ingredientsArr) {
  const ingredientsString = ingredientsArr.join(", ");
  const systemPrompt = `You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page`;
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
    });
    // const response = await client.textGeneration({
    // const response = await client.textGeneration({
    //   model: "mistralai/Mistral-7B-Instruct-v0.2",
    //   // model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
    //   inputs: prompt,
    //   parameters: {
    //     max_new_tokens: 1024,
    //   },
    // });
    console.log("From ai.js > ", response);
    // return response.generated_text;
    return response.choices[0].message.content;
  } catch (err) {
    console.error(err.message);
    return "Sorry, I couldn't generate a recipe.";
  }
}
