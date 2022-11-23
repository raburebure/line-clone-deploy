import React, { useEffect, useState } from "react";
import SignOut from "./SignOut.js";
import { auth, db } from "../firebase.js";
import SendMessage from "./SendMessage.js";

function Line() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    db.collection("messages")
      .orderBy("createdAt")
      .limit(50)
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);
  return (
    <div>
      <SignOut />
      <div className="msgs">
        {messages.map(({ id, text, photoURL, uid }) => (
          <div>
            <div
              key={id}
              className={`msg ${
                uid === auth.currentUser.uid ? "sent" : "received"
              }`}
            >
              <img src={photoURL} alt=""></img>
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>

      <SendMessage></SendMessage>
    </div>
  );
}

export default Line;
