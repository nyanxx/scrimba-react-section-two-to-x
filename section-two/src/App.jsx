import Header from "./components/Header";
import Entry from "./components/Entry";
import data from "../data.js";

export default function App() {
  const entryComponent = data.map((entry) => (
    <Entry
      key={entry.id}
      // Travel Journal: Passing object as props challenge
      entry={entry}
    />
  ));

  return (
    <main className="app">
      <Header />
      {entryComponent}
    </main>
  );
}
