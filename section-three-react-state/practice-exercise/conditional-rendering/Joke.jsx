import { useState } from "react";
export default function Joke(props) {
  /**
   * Conditional rendering && challenge:
   * - Create state `isShown` (boolean, default to `false`)
   * - Add a button that toggles the value back and forth
   */

  const [isShown, setIsShown] = useState(false);

  function handleClick() {
    setIsShown((prevState) => {
      return !prevState;
    });
  }

  /**
   * Conditional rendering && Challenge:
   * Only display the punchline paragraph if `isShown` is true
   */

//   console.log(isShown);

  return (
    <div>
      {props.setup && <h3>{props.setup}</h3>}
      {isShown && <p>{props.punchline}</p>}
      <button onClick={handleClick}>Show punchline</button>
      <hr />
    </div>
  );
}
