import React from "react";

const About = () => (
  <section style={{ padding: 24 }}>
     <div className="about-page">
      <h1>💡 About InstaBoard</h1>

      <h2>About InstaBoard</h2>
      <p>
        InstaBoard is a React-based app that allows you to explore a team of users,
        view detailed profiles, and track liked users. This project is built
        using React, React Router, and modern JavaScript techniques.
      </p>

      <h3>Features:</h3>
      <ul className="about-list">
        <li>Multi-page navigation using React Router</li>
        <li>Dynamic user profiles with detailed information</li>
        <li>Manage liked users using localStorage</li>
        <li>Responsive design for all screen sizes</li>
      </ul>

      <p>
        This app is part of the InstaBoard Lab Project and demonstrates
        the use of React functional components, hooks, and routing.
      </p>

    </div>
  </section>
);

export default About;