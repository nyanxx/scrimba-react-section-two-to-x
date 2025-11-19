export default function Pad(props) {
  /**
   * Sound pads challenge part 4.1 - local state:
   * Create state controlling whether
   * this pad is "on" or "off". Use the incoming
   * `props.on` to determine the initial state.
   *
   * Create an event listener so when the pad is clicked,
   * it toggles from "on" to "off".
   *
   * Goal: clicking each pad should toggle it on and off.
   */

  // const [padOnStatus, setPadOnStatus] = React.useState(props.padOn);

  // function togglePadOnStatus() {
  //   props.toggle(id);

  //   setPadOnStatus((prevState) => {
  //     return !prevState;
  //   });
  // }

  return (
    <button
      style={{ backgroundColor: props.color }}
      className={props.padOn ? "on" : undefined}
      onClick={() => props.toggle(props.id)}
    ></button>
  );
}
