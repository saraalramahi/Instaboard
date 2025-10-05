
// import React from "react";
// import UserList from "./components/userlist/userlist";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <h1 style={{color:"Brown"}}>InstaBoard</h1>
//       <UserList />
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import UserList from "./components/userlist/userlist";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "App dark-mode" : "App"}>
      <h1>InstaBoard</h1>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <UserList />
    </div>
  );
}

export default App;

