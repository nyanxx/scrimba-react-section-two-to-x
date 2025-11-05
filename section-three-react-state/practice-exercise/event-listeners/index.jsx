import ReactDOM from "react-dom/client";

function App() {
  function handleClick() {
    console.log("I was clicked!");
  }

  function handleMouseOver() {
    console.log("Get that cursor off me!!!");
  }

  /**
   * Challenge: Log something to the console when the mouse
   * hovers over the image
   */

  return (
    <main className="container">
      <img
        src="https://picsum.photos/640/360"
        alt="Placeholder image from Picsum"
        onMouseOver={handleMouseOver}
      />
      <button onClick={handleClick}>Click me</button>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
