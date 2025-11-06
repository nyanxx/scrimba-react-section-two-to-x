import React from "react";

export default function App() {
  /**
   * useState - State Practice Challenge 1:
   * Create state to track our count value (initial value is 0)
   * Don't forget to replace the hard-coded "0" with your new state
   */

  let [count, setCount] = React.useState(0);

  function handleClickAdd() {
    setCount(() => {
      count++;
      return count;
    });
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
        <button
          onClick={handleClickAdd}
          className="plus"
          aria-label="Increase count"
        >
          +
        </button>
      </div>
    </main>
  );
}
