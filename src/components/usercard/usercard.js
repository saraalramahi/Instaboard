"use strict ;"


import React, { useState } from "react";
import "./usercard.css";

function UserCard({ user }) {
  const [likes, setLikes] = useState(0);
  const [showEmail, setShowEmail] = useState(false);

  return (
    <div className="user-card">
      <img src={user.picture.large} alt={user.name.first} />
      <h3>
        {user.name.first} {user.name.last}
      </h3>

      {showEmail && <p>{user.email}</p>}

      <button onClick={() => setShowEmail(!showEmail)}>
        {showEmail ? "Hide Email" : "Show Email"}
      </button>

      <div>
        <button onClick={() => setLikes(likes + 1)}>Like ❤️</button><br></br>
        <span>{likes} Likes</span>
      </div>
    </div>
  );
}

export default UserCard;