import React, { Fragment, useEffect, useContext } from "react";
import Spinner from "../layout/Spinner";
import { Link } from "react-router-dom";
import Repos from "../repos/Repos";
import GithubContext from "../../contexts/github/githubContext";

const User = ({ match}) => {
  const githubContext = useContext(GithubContext);
  const {getUser, getRepos, repos, user, loading} = githubContext;
  
  useEffect(() => {
    const userName = match.params.login;
    getUser(userName);
    getRepos(userName);
    //eslint-disable-next-line
  }, [])

    const {
      name,
      location,
      avatar_url,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable,
      bio,
      blog,
      company,
      login,
    } = user;

    if (loading) return <Spinner />;
    else
      return (
        <Fragment>
          <Link to="/" className="btn btn-light">
            Back to Search
          </Link>
          Hireable: {""}
          {hireable ? (
            <i className="fas fa-check text-success" />
          ) : (
            <i className="fas fa-times-circle text-danger" />
          )}
          <div className="card grid-2">
            <div className="all-center">
              <img
                src={avatar_url}
                className="round-mg"
                alt=""
                style={{ width: "150px" }}
              />
              <h1>{name}</h1>
              <p>Location : {location}</p>
            </div>
            <div>
              {bio && (
                <Fragment>
                  <h3>Bio</h3>
                  <p>{bio}</p>
                </Fragment>
              )}
              <a href={html_url} className="btn btn-dark my-1">
                Visit Github Profile
              </a>
              <ul>
                <li>
                  {login && (
                    <Fragment>
                      <strong>Username: {login}</strong>
                    </Fragment>
                  )}
                  <li>
                    {company && (
                      <Fragment>
                        <strong>Company: {company}</strong>
                      </Fragment>
                    )}
                  </li>
                  <li>
                    {blog && (
                      <Fragment>
                        <strong>Blog: {blog}</strong>
                      </Fragment>
                    )}
                  </li>
                </li>
              </ul>
            </div>
          </div>
          <div className="card text-center">
            <div className="badge badge-primary">Followers: {followers}</div>
            <div className="badge badge-success">Following: {following}</div>
            <div className="badge badge-danger">Public Repos: {public_repos}</div>
            <div className="badge badge-dark">Public Gists: {public_gists}</div>
          </div>

          <Repos repos={repos}/>
        </Fragment>
      );
}

export default User;
