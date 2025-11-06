import React from "react";
export default function App() {
  /**
   * Toggling State Challenge:
   * - Initialize state for `isGoingOut` as a boolean
   * - Make it so clicking the button flips that boolean value (true -> false, false -> true)
   * - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
   */

  const [isGoingOut, setIsGoingOut] = React.useState(true);

  function handleClick() {
    setIsGoingOut((prevDecision) => {
      return !prevDecision;
    });
  }

  return (
    <main>
      <h1 className="title">Do I feel like going out tonight?</h1>
      <button
        onClick={handleClick}
        className="value"
        aria-label={`The current decision is set to ${
          isGoingOut ? "Yes" : "No"
        }, click again to change the decision!`}
      >
        {isGoingOut ? "Yes" : "No"}
      </button>
    </main>
  );
}
