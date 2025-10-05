// "use strict;"

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import UserCard from "../usercard/usercard";
// import "./userlist.css";

// function UserList() {
//   const [users, setUsers] = useState([]);

//   const fetchUsers = async () => {
//     const response = await axios.get(
//       "https://randomuser.me/api/?results=12"
//     );
//     setUsers(response.data.results);
//   };

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   return (
//     <div>
//       <div className="user-list">
//         {users.map((user, index) => (
//           <UserCard key={index} user={user} />
//         ))}
//       </div>

//       <button className="load-more" onClick={fetchUsers}>
//         <h3>Load More</h3>
//       </button>
//     </div>
//   );
// }

// export default UserList;


import React, { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "../usercard/usercard";
import "./userlist.css";

function UserList() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  const fetchUsers = async () => {
    const response = await axios.get(
      "https://randomuser.me/api/?results=12"
    );
    setUsers(response.data.results);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const filteredUsers = users.filter((user) =>
    `${user.name.first} ${user.name.last}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      <div className="user-list">
        {filteredUsers.map((user, index) => (
          <UserCard key={index} user={user} />
        ))}
      </div>

      <button className="load-more" onClick={fetchUsers}>
        Load More
      </button>
    </div>
  );
}

export default UserList;

