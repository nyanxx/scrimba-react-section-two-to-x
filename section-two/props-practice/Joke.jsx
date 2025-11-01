export default function Joke(props) {
  console.log(props);
  return (
    <article className="joke">
      {props.setup && <p className="setup">"{props.setup}"</p>}
      {/* another way */}
      {/* <p style={{display: props.setup ? "block" : "none"}} className="setup">"{props.setup}"</p> */}
      <p>"{props.punchline}"</p>
    </article>
  );
}
