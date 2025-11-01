/**
 * Non-string props Exercise #1 Challenge: Think critically - how would you pass in a prop that 
 * isn't a string datatype.
 * 
 * E.g. Say you want each Joke component to receive an "upvotes" 
 * and "downvotes" prop that is a number, as well as a prop with 
 * an array of comments, and a boolean of whether the joke is a 
 * pun (`isPun`).
 */

import Joke from "./Joke";

export default function App() {
  return (
    <main>
      <h1>🤣 Jokes</h1>
      <hr className="hr-line" />
      {/* only punchline */}
      <Joke
        punchline="It’s hard to explain puns to kleptomaniacs because they always take things literally."
      />
      {/* setup and punchline */}
      <Joke
        setup="I got my daughter a fridge for her birthday."
        punchline="I can't wait to see her face light up when she opens it."
      />
      <Joke
        setup="How did the hacker escape the police?"
        punchline="He just ransomware!"
      />
      <Joke
        setup="What's the best thing about Switzerland?"
        punchline="I don't know, but the flag is a big plus!"
      />
    </main>
  );
}
