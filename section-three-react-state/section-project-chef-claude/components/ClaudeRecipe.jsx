import ReactMarkdown from "react-markdown";

export default function ClaudeRecipe(props) {
  return (
    <section className="show-recipe">
      <ReactMarkdown>{props.recipe}</ReactMarkdown>
    </section>
  );
}
