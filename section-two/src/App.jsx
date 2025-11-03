import Header from "./components/Header";
import Entry from "./components/Entry";
import data from "../data.js";

/**
 * Travel Journal: Map Entry components challenge:
 * - import the array of data from data.js
 * - map over the array to create an <Entry /> component
 *   for every item in the data array.
 * - display the array of Entry components in place of the current
 *   hard-coded <Entry /> instance.
 */

export default function App() {
  const entryComponent = data.map((entry) => (
    <Entry
      key={entry.id}
      img={entry.img}
      title={entry.title}
      country={entry.country}
      googleMapsLink={entry.googleMapsLink}
      dates={entry.dates}
      text={entry.text}
    />
  ));

  return (
    <main className="app">
      <Header />
      {entryComponent}
    </main>
  );
}
