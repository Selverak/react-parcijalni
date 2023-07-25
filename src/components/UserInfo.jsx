import React from "react";
import PropTypes from "prop-types";

const UserInfo = ({ userData, repos, onReturn }) => {
  return (
    <div>
      {userData && (
        <div>
          <img src={userData.avatar_url} alt={userData.name} width="100" />
          <h2>{userData.name}</h2>
          <p>LOCATION: {userData.location}</p>
          <p>BIO: {userData.bio}</p>
        </div>
      )}

      {repos && (
        <div>
          <h3>Repositories:</h3>
          <ul>
            {repos.map((repo) => (
              <li key={repo.id}>{repo.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

UserInfo.propTypes = {
  userData: PropTypes.object,
  repos: PropTypes.array,
  onReturn: PropTypes.func.isRequired,
};

export default UserInfo;
