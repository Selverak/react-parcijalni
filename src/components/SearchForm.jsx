import React from "react";
import PropTypes from "prop-types";

const SearchForm = ({
  username,
  onUsernameChange,
  onSearch,
  onReturn,
  userData,
}) => {
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      onSearch();
    }
  };

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => onUsernameChange(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Enter GitHub username"
      />
      <button onClick={onSearch}>Search</button>
      {userData && <button onClick={onReturn}>Return</button>}
    </div>
  );
};

SearchForm.propTypes = {
  username: PropTypes.string.isRequired,
  onUsernameChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  onReturn: PropTypes.func.isRequired,
  userData: PropTypes.object,
};

export default SearchForm;
