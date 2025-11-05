/**
 * Challenge: Build the Header component in a separate file
 * and render it here in the App component
 */

import Header from "./components/Header";
import AddIngredient from "./components/AddIngredient";
import IngredientOnHands from "./components/IngredientOnHands";
import GetRecipe from "./components/GetRecipe";
import ShowRecipe from "./components/ShowRecipe";

export default function App() {
  return (
    <main>
      <Header />
      <AddIngredient />
      <IngredientOnHands />
      <GetRecipe />
      <ShowRecipe />
    </main>
  );
}
