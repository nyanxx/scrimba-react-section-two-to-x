import React from "react";
import WindowTracker from "./WindowTracker";

export default function App() {
  /**
   * State and Effect Practices:
   * 1. Create state called `show`, default to `true`
   * 2. When the button is clicked, toggle `show`
   * 3. Only display `<WindowTracker>` if `show` is `true`
   */

  const [show, setShow] = React.useState(true);

  function toggleTracker() {
    setShow((prevState) => !prevState);
  }

  return (
    <main className="container">
      <button onClick={toggleTracker}>Toggle WindowTracker</button>
      {show && <WindowTracker />}
    </main>
  );
}
