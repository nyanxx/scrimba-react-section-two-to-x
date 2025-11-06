export default function App() {
  /**
   * Ternary practice Challenge 1: Replace the if/else below with a ternary
   * to determine the text that should display on the page
   */

  /**
   * Ternary practice Challenge 2: move our ternary directly inside of the JSX
   * so the "Yes" and "No" are determined inside the <h1>
   *
   * Hint: you will no longer need the `answer` variable
   */

  const isGoingOut = true;

  //   const answer = isGoingOut ? "Yes" : "No"; // 👈 Use ternary here

  //   // Remove the code below 👇 once your ternary is done
  //   if (isGoingOut === true) {
  //     answer = "Yes";
  //   } else {
  //     answer = "No";
  //   }

  return (
    <main>
      <h1 className="title">Do I feel like going out tonight?</h1>
      <button className="value">{isGoingOut ? "Yes" : "No"}</button>
    </main>
  );
}
