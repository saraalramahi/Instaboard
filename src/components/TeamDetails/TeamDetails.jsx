import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./TeamDetails.css";

export default function TeamDetails() {
  const location = useLocation();
  const navigate = useNavigate();

  const user = location.state?.user;

  if (!user) {
    return (
      <div className="team-details-container">
        <h2>User not found</h2>
        <button onClick={() => navigate("/team")}>⬅ Back to Team</button>
      </div>
    );
  }

  return (
    <div className="team-details-container">
      <button className="back-btn" onClick={() => navigate("/team")}>⬅ Back to Team</button>
      <div className="details-card">
        <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} />
        <h2>{user.name.title} {user.name.first} {user.name.last}</h2>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Cell:</strong> {user.cell}</p>
        <p><strong>Address:</strong> {user.location.street.number} {user.location.street.name}, {user.location.city}, {user.location.state}, {user.location.country}, {user.location.postcode}</p>
        <p><strong>Age:</strong> {user.dob.age}</p>
        <p><strong>Gender:</strong> {user.gender}</p>
      </div>
    </div>
  );
}
