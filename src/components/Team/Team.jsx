import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Team.css";

export default function Team() {
  const [users, setUsers] = useState([]);

  // جلب 5 مستخدمين فقط من API
  useEffect(() => {
    fetch(`https://randomuser.me/api/?results=5`)
      .then(res => res.json())
      .then(data => setUsers(data.results))
      .catch(err => console.log(err));
  }, []);

  // إضافة مستخدم للـ likedUsers في localStorage
  const handleLike = (user) => {
    const stored = JSON.parse(localStorage.getItem("likedUsers")) || [];
    const exists = stored.find(u => u.email === user.email);
    if (!exists) {
      localStorage.setItem("likedUsers", JSON.stringify([...stored, user]));
      alert(`${user.name.first} added to Liked Users!`);
    } else {
      alert(`${user.name.first} is already liked!`);
    }
  };

  return (
    <div className="team-container">
      <h2>Our Team</h2>
      <div className="team-grid">
        {users.map((user, index) => (
          <div key={index} className="team-card">
            <img src={user.picture.medium} alt={`${user.name.first} ${user.name.last}`} />
            <h3>{user.name.first} {user.name.last}</h3>
            <p>{user.email}</p>

            <Link 
              to="/team-details" 
              state={{ user }}
              className="profile-btn"
            >
              View Profile
            </Link>

            <br></br><br></br><button className="like-btn" onClick={() => handleLike(user)}>❤️ Like</button>
          </div>
        ))}
      </div>
    </div>
  );
}
