/**
 * Challenge: Build the Header component in a separate file
 * and render it here in the App component
 */

import Header from "./components/Header";
import Main from "./components/Main";
// import AddIngredient from "./components/AddIngredient";
import IngredientOnHands from "./components/IngredientOnHands";
import GetRecipe from "./components/GetRecipe";
import ShowRecipe from "./components/ShowRecipe";

export default function App() {
  return (
    <>
      <Header />
      <Main />
      {/* <AddIngredient /> */}
      <IngredientOnHands />
      <GetRecipe />
      <ShowRecipe />
    </>
  );
}
