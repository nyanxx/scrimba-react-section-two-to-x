import padsData from "./pads";
import React from "react";
import Pad from "./Pad";

export default function App() {
  /**
   * Sound pads challenge, part 1:
   * 1. Initialize state with the default value of the
   *    array pulled in from pads.js
   * 2. Map over that state array and display each one
   *    as a <button> (CSS ids already written for you)
   *    (Don't worry about using the "on" or "color"
   *    properties yet)
   */

  /**
   * Sound pads challenge, part 2:
   * 1. Create a separate component called "Pad" and
   *    replace the `button` above with our <Pad /> component
   * 2. Pass the Pad component a prop called `color` with the
   *    value of the same name from the `padsData` objects
   * 3. In the Pad component, apply an inline style to the <button>
   *    to set the backgroundColor of the button.
   *
   * (We'll deal with the "on" property soon)
   */

  const [pads, setPadsArr] = React.useState(padsData);

  const padsRender = pads.map((pad) => {
    return <Pad key={pad.id} color={pad.color} />;
  });

  return (
    <main>
      <div className="pad-container">{padsRender}</div>
    </main>
  );
}
