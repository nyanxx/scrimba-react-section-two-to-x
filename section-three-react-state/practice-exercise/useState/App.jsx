import React from "react";

export default function App() {
  let [isImportant, setIsImportant] = React.useState("Yes");

  function handleClick() {
    setIsImportant((default_value, what, what2) => {
      console.log(default_value); // yes
      default_value = "yooo"; // doesnt update the DOM value
      console.log(default_value); // yooo
      console.log(what); // undefined
      console.log(what2); // undefined
      const now = Date.now();
      return now; // this thing will render on the DOM
    });
  }

  return (
    <main>
      <h1 className="title">Is state important to know?</h1>
      <button onClick={handleClick} className="value">
        {isImportant}
      </button>
    </main>
  );
}
