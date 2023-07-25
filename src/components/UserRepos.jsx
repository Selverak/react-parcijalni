import React from "react";
import PropTypes from "prop-types";

class UserRepos extends React.Component {
  static propTypes = {
    repos: PropTypes.array.isRequired,
    handleClick: PropTypes.func.isRequired,
  };

  render() {
    const { repos, handleClick } = this.props;

    return (
      <div>
        <h3>Repositories:</h3>
        <ul>
          {repos.map((repo) => (
            <li key={repo.id} onClick={() => handleClick(repo)}>
              {repo.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default UserRepos;
