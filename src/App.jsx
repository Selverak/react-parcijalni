import React, { useState } from "react";
import axios from "axios";
import SearchForm from "./components/SearchForm";
import UserList from "./components/UserList";
import UserInfo from "./components/UserInfo";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState([]);
  const [userData, setUserData] = useState(null);
  const [userRepos, setUserRepos] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/search/users?q=${username}`
      );
      setUsers(response.data.items);
      setUserData(null);
      setUserRepos([]);
    } catch (error) {
      console.error("Error fetching data from GitHub API", error);
      alert("Error searching for users");
    }
  };

  const handleUserClick = async (login) => {
    try {
      const userResponse = await axios.get(
        `https://api.github.com/users/${login}`
      );
      const reposResponse = await axios.get(
        `https://api.github.com/users/${login}/repos`
      );

      setUserData(userResponse.data);
      setUserRepos(reposResponse.data);
      // setUsers([]);  // Don't clear users list
    } catch (error) {
      console.error("Error fetching data from GitHub API", error);
      alert("Error fetching user details");
    }
  };

  const handleReturn = () => {
    setUserData(null);
    setUserRepos([]);
  };

  return (
    <div className="App">
      <SearchForm
        username={username}
        onUsernameChange={setUsername}
        onSearch={handleSearch}
        onReturn={handleReturn}
        userData={userData}
      />

      {!userData && <UserList users={users} onUserClick={handleUserClick} />}

      {userData && userRepos && (
        <UserInfo
          userData={userData}
          repos={userRepos}
          onReturn={handleReturn}
        />
      )}
    </div>
  );
}

export default App;
