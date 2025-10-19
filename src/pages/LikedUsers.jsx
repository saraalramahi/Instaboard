import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./LikedUsers.css";

export default function LikedUsers() {
  const [likedUsers, setLikedUsers] = useState([]);

  // جلب المستخدمين من localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("likedUsers")) || [];
    setLikedUsers(stored);
  }, []);

  // إزالة مستخدم من liked users
  const handleUnlike = (email) => {
    const updated = likedUsers.filter((u) => u.email !== email);
    setLikedUsers(updated);
    localStorage.setItem("likedUsers", JSON.stringify(updated));
  };

  return (
    <div className="liked-users">
      <h2>❤️ Liked Users</h2>

      {likedUsers.length === 0 ? (
        <p>No liked users yet.</p>
      ) : (
        <div className="liked-users-list">
          {likedUsers.map((user) => (
            <div className="liked-card" key={user.email}>
              <img src={user.picture?.thumbnail || user.picture?.medium} alt={user.name?.first} />
              <p>{user.name?.first} {user.name?.last}</p>
              <button onClick={() => handleUnlike(user.email)}>💔 Unlike</button>
            </div>
          ))}
        </div>
      )}

      <Link to="/team" className="back-link">⬅ Back to Team</Link>
    </div>
  );
}