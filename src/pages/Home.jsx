import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
   <div className="home-page">
    <h1>Welcome to InstaBoard 🌟</h1>
      <p>
        Discover your team, view detailed user profiles, and manage liked users
        all in one React app!
      </p>
   
      <div className="home-buttons">
        <Link to="/team" className="home-btn">View Team</Link>
        <Link to="/liked-users" className="home-btn">Liked Users ❤️</Link>
        <Link to="/about" className="home-btn">About App</Link>
      </div>

      <p className="home-footer">
        Start exploring now and enjoy the InstaBoard experience!
      </p>
    </div>
  );
};

export default Home;