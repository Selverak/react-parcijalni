import React from "react";
import PropTypes from "prop-types";

function UserDetails({ userData }) {
  return (
    <div>
      <h2>{userData.name}</h2>
      <p>Location: {userData.location}</p>
      <p>{userData.bio}</p>
      <img src={userData.avatar_url} alt={userData.login} width="100" />
    </div>
  );
}

UserDetails.propTypes = {
  userData: PropTypes.object.isRequired,
};

export default UserDetails;
