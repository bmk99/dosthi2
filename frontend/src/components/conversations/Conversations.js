import React, { useEffect, useState } from "react";
import "./conversation.css";
import photo from "./unsplash2.jpg";
import axios from "axios";


export default function Conversations({ conversation,currentUser }) {
  const [user, setUser] = useState(null);


  const friendId = conversation.member.find((m) => m !== currentUser._id);
  const getUser = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/getProfile/:username + ${friendId}`
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <div className="conversation">
      <img src={photo} alt="" className="conversationImg" />
      <span className="conversationName">Vijay</span>
    </div>
  );
}
