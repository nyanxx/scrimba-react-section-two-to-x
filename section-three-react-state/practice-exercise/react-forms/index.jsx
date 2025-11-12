import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Challenge: add another label and input for the password field
 */

function App() {
  return (
    <section>
      <h1>Signup form</h1>
      <form>
        <label htmlFor="email">
          Email:
          <input
            id="email"
            type="email"
            name="email"
            placeholder="joe@schmoe.com"
          />
        </label>

        <label htmlFor="password">
          Password:
          <input type="password" name="password" id="password" />
        </label>
      </form>
    </section>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
