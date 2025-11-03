// import Joke from "./Joke";

export default function App() {
  /**
   * Challenge: manually turn this string array into an array of
   * JSX elements by surrounding each ninja turtle with an <h2> element
   */

  const ninjaTurtles = ["Donatello", "Michaelangelo", "Rafael", "Leonardo"];
  return (
    <main>
      {ninjaTurtles.map((turtle, index) => (
        <h2 key={index}>{turtle}</h2>
      ))}
    </main>
  );
}

// export default function App() {
//   return (
//     <main>
//       <h1>🤣 Jokes</h1>
//       <hr className="hr-line" />
//       {/* only punchline */}
//       <Joke
//         punchline="It's hard to explain puns to kleptomaniacs because they always take things literally."
//         upvotes={1}
//         downvotes={4}
//         // You can even pass the array of object having comments, author and timestamp.
//         comments={["It's funny", "Am i the only one who didn't get this!"]}
//         isPun={true}
//       />
//       {/* setup and punchline */}
//       <Joke
//         setup="I got my daughter a fridge for her birthday."
//         punchline="I can't wait to see her face light up when she opens it."
//         upvotes={4}
//         downvotes={1}
//         comments={["LOL", "jajajajajaja"]}
//         isPun={true}
//       />
//       <Joke
//         setup="How did the hacker escape the police?"
//         punchline="He just ransomware!"
//         upvotes={9}
//         downvotes={2}
//         comments={["Ran some where hahaha", "Nice one"]}
//         isPun={true}
//       />
//       <Joke
//         setup="What's the best thing about Switzerland?"
//         punchline="I don't know, but the flag is a big plus!"
//         upvotes={5}
//         downvotes={1}
//         comments={["I see what you did there!", "nice", "noice👍"]}
//         isPun={false}
//       />
//     </main>
//   );
// }
