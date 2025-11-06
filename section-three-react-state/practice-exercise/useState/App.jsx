import React from "react";

export default function App() {
  /**
   * useState - State Practice Challenge 1:
   * Create state to track our count value (initial value is 0)
   * Don't forget to replace the hard-coded "0" with your new state
   *
   * useState - State Practice Challenge 2:
   * Create a function called `add` that runs
   * when the + button is clicked. (Can just console.log("add") for now)
   *
   * useState - State Practice Challenge 3:
   * See if you can think of a way to add 1 to the count
   * every time the + button is clicked
   *
   */

  const [count, setCount] = React.useState(0);

  function add() {
    setCount(count + 1);
    // using ++ or -- is a bin no no in React!
  }

  function handleClickSub() {
    setCount(() => {
      count--;
      return count;
    });
  }

  return (
    <main className="container">
      <h1>How many times will Bob say "state" in this section?</h1>
      <div className="counter">
        <button
          onClick={handleClickSub}
          className="minus"
          aria-label="Decrease count"
        >
          -
        </button>
        <h2 className="count">{count}</h2>
        <button onClick={add} className="plus" aria-label="Increase count">
          +
        </button>
      </div>
    </main>
  );
}
