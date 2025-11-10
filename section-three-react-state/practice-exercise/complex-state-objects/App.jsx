import React from "react";
import avatar from "./images/user.png";
import starFilled from "./images/star-filled.png";
import starEmpty from "./images/star-empty.png";

export default function App() {
  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (212) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: false,
  });
  /**
   * Complex state: Objects challenge: Fill in the values in the markup
   * using the properties of our state object above
   * (Ignore `isFavorite` for now)
   */

  /**
   * Complex state: Objects challenge:
   * Use a ternary to determine which star image variable
   * should be used based on the `contact.isFavorite` property. Test
   * your results by manually changing the isFavorite value in state.
   *
   * `true` => starFilled
   * `false` => starEmpty
   *
   */

  /**
   * Challenge:
   * Update the following:
   * - aria-pressed should reflect the same value as contact.isFavorite.
   * - aria-label should switch to say "Remove from favorites" if
   *   contact.isFavorite is `true`.
   * - img alt should say "filled star icon" when it is filled.
   */

  const starValue = contact.isFavorite ? starFilled : starEmpty;
  const starImgAlt = contact.isFavorite
    ? "filled star icon"
    : "empty star icon";
  const starAriaLabel = contact.isFavorite
    ? "Remove from favorites"
    : "Add to favorites";

  function toggleFavorite(event) {
    setContact((prevObj) => {
      prevObj.isFavorite = !prevObj.isFavorite;
      return prevObj;
    });
  }

  return (
    <main>
      <article className="card">
        <img
          src={avatar}
          className="avatar"
          alt="User profile picture of John Doe"
        />
        <div className="info">
          <button
            onClick={toggleFavorite}
            aria-pressed={contact.isFavorite}
            aria-label={starAriaLabel}
            className="favorite-button"
          >
            <img src={starValue} alt={starImgAlt} className="favorite" />
          </button>
          <h2 className="name">
            {contact.firstName} {contact.lastName}
          </h2>
          <p className="contact">{contact.phone}</p>
          <p className="contact">{contact.email}</p>
        </div>
      </article>
    </main>
  );
}
