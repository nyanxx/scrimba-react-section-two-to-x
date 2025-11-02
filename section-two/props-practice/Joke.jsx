export default function Joke(props) {
  return (
    <article className="joke">
      {props.setup && <p className="setup">"{props.setup}"</p>}
      {/* another way */}
      {/* <p style={{display: props.setup ? "block" : "none"}} className="setup">"{props.setup}"</p> */}
      <p>"{props.punchline}"</p>
      <div className="votes">
        <span className="upvotes">{props.upvotes}👍</span>
        <span className="downvotes">{props.downvotes}👎</span>
      </div>
      <section className="comment-section">
        {props.comments.map((indiComment, index) => (
          <span key={index} className="individual-comment">
            {indiComment}
          </span>
        ))}
      </section>
    </article>
  );
}
