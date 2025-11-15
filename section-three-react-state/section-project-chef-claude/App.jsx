/**
 * Challenge: Build the Header component in a separate file
 * and render it here in the App component
 */

import Header from "./components/Header";
import Main from "./components/Main";
// import ShowRecipe from "./components/ShowRecipe";

export default function App() {
  return (
    <>
      <Header />
      <Main />
      {/* <ShowRecipe /> */}
    </>
  );
}
