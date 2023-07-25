import React from "react";
import PropTypes from "prop-types";

const UserList = ({ users, onUserClick }) => {
  return (
    <ul>
      {users.map((user) => (
        <li
          className="list-item"
          key={user.id}
          onClick={() => onUserClick(user.login)}
        >
          <img src={user.avatar_url} alt={user.login} width="50" />
          <span>{user.login}</span>
        </li>
      ))}
    </ul>
  );
};

UserList.propTypes = {
  users: PropTypes.array.isRequired,
  onUserClick: PropTypes.func.isRequired,
};

export default UserList;
