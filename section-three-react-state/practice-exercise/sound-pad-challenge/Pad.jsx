export default function Pad({ color, padOnStatus }) {
  /**
   * Sound pads challenge, part 3:
   * Our buttons got turned off by default! Update the code
   * so if the button is "on", it has the className of "on".
   */
  const padOn = padOnStatus ? "on" : null;
  // let padOn = padStatus ? "on" : "";
  // let padOn = padStatus ? "on" : undefined;
  return <button style={{ backgroundColor: color }} className={padOn}></button>;
}
