

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Team from "./components/Team/Team";
import TeamDetails from "./components/TeamDetails/TeamDetails";
import LikedUsers from "./pages/LikedUsers";
import NotFound from "./pages/NotFound";

function App() {
  
  return (
    
    <Router>
      <Layout>
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/team" element={<Team />} />
  <Route path="/team-details" element={<TeamDetails />} />
  <Route path="/liked-users" element={<LikedUsers />} />
  <Route path="/about" element={<About />} />
  <Route path="*" element={<NotFound />} />
</Routes>
      </Layout>
    </Router>
    
  );
}

export default App;