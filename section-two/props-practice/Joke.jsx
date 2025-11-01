export default function Joke(props) {
  console.log(props);
  return (
    <article className="joke">
      {props.setup && <p>"{props.setup}"</p>}
      <p>"{props.punchline}"</p>
    </article>
  );
}
