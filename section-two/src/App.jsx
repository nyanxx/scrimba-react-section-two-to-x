import Header from "./components/Header";
import Entry from "./components/Entry";
import data from "../data.js";

export default function App() {
  const entryComponent = data.map((entry) => (
    <Entry
      key={entry.id}
      // Travel Journal: Spread object as props
      {...entry}
    />
  ));

  return (
    <main className="app">
      <Header />
      {entryComponent}
    </main>
  );
}
