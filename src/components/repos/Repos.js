import React from "react";
import RepoItem from "./RepoItem";
import PropTypes from 'prop-types'

const Repos = ({ repos }) => {
  return repos.map((repo) => <RepoItem repo={repo} key={repo.id}/>);
  
};

export default Repos;

Repos.propTypes = {
    repos : PropTypes.array.isRequired,
}