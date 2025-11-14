import React from "react";

export default function App() {
  const [unreadMessages, setUnreadMessages] = React.useState(["", "", ""]);

  /**
   * Conditional rendering practice: ternary challenge:
   * - If there are no unread messages, display "You're all caught up!"
   * - If there's exactly 1 unread message, it should read "You have
   *   1 unread message (singular)"
   * - If there are > 1 unread messages, display "You have <n> unread
   *   messages" (plural)
   */

  return (
    <div>
      {unreadMessages.length === 0 ? <h1>You're all caught up!</h1> : null}

      {unreadMessages.length > 0 ? (
        <h1>
          You have unread {unreadMessages.length}{" "}
          {unreadMessages.length === 1 ? "message" : "messages"}
        </h1>
      ) : null}
    </div>
  );
}
