import padsData from "./pads";
import React from "react";

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

  const [pads, setPadsArr] = React.useState(padsData);

  const padsRender = pads.map((pad) => {
    return (
      <button key={pad.id} style={{ background: pad.color }}>
        {pad.id}
      </button>
    );
  });

  return (
    <main>
      <div className="pad-container">{padsRender}</div>
    </main>
  );
}
