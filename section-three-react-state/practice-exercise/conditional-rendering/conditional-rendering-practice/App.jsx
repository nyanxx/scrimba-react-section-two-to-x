import React from "react";

export default function App() {
  const [unreadMessages, setUnreadMessages] = React.useState([]);

  /**
   * Conditional rendering practice: && Challenge:
   * Only display the <h1> below if there are unread messages
   */

  /**
   * Conditional rendering practice: && Challenge:
   * If there are 0 unread messages, display a paragraph that says "You
   * have no unread messages". (So, the logic will be the opposite of
   * what we have for the h1)
   */
  return (
    <div>
      {unreadMessages.length > 0 && (
        <h1>You have {unreadMessages.length} unread messages!</h1>
      )}
      {unreadMessages === 0 && <p>You have no unread messages</p>}
    </div>
  );
}
