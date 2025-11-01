/**
 * Challenge:
 * - Create a Contact component in another file
 * - Move one of the contact card articles below into that file
 * - import and render 4 instances of that contact card
 *     - Think ahead: what's the problem with doing it this way?
 */

import Contact from "./Contact.jsx";
function App() {
  return (
    <div className="contacts">
      <Contact />
      <Contact />
      <Contact />
      <Contact />
    </div>
  );
}

export default App;
