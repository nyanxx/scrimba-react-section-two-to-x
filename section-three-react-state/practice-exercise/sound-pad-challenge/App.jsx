import padsData from "./pads";
import React from "react";
import Pad from "./Pad";

export default function App() {
  /**
   * Sound pads challenge part 4.2 - shared state:
   * Create a toggle() function that logs
   * "clicked!" to the console
   *
   * Pass that function down to each of the Pad components
   * and set it up so when they get clicked, the function runs
   */
  const [pads, setPads] = React.useState(padsData);

  function toggle(id) {
    /**
     * Sound pads challenge part 4.3 - updating item in array:
     * Call setPads to update the state of the one pad that was
     * clicked. Map over the previous pads array, and if the current
     * item you're iterating over has the same id as the `id` passed
     * to this function, then return a new object with the `on` value
     * set to the opposite of what it was before.
     * Otherwise (if the ids don't match), just return the previous
     * item as it was, unchanged.
     */

    setPads((pervState) =>
      pervState.map((pad) => {
        return pad.id === id ? { ...pad, on: !pad.on } : pad;
      })
    );
  }

  const padsRender = pads.map((pad) => {
    return (
      <Pad
        key={pad.id}
        id={pad.id}
        color={pad.color}
        padOn={pad.on}
        toggle={toggle}
      />
    );
  });

  return (
    <main>
      <div className="pad-container">{padsRender}</div>
    </main>
  );
}
