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
      <Contact
        img="./images/mr-whiskerson.png"
        imgAlt="Photo of Mr. Whiskerson"
        name="Mr. Whiskerson"
        phoneNo="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"
      />
      <Contact
        img="./images/fluffykins.png"
        imgAlt="Photo of Fluffykins"
        name="Fluffykins"
        phoneNo="(212) 555-2345"
        email="fluff@me.com"
      />
      <Contact
        img="./images/felix.png"
        imgAlt="Photo of Felix"
        name="Felix"
        phoneNo="(212) 555-4567"
        email="thecat@hotmail.com"
      />
      <Contact
        img="./images/pumpkin.png"
        imgAlt="Photo of Pumpkin"
        name="Pumpkin"
        phoneNo="(0800) CAT KING"
        email="pumpkin@scrimba.com"
      />
    </div>
  );
}

export default App;
