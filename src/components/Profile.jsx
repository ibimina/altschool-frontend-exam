import React from "react";
import useFetch from "../hooks/useFetch";
import "./profile.css";

export default function Profile() {
  let url = "https://api.github.com/users/ibimina";
  const { state } = useFetch(url);
  const { loading, docs } = state;

  return (
    <>
      {loading && <p className="loading">loading</p>}
      {docs && (
        <div className="profile_container">
          <div className="profile">
            <img src={docs.avatar_url} alt={docs.name} className="avatar" />

            <div className="name">
              <p className="full_name">{docs.name}</p>
              <p className="username">{docs.login}</p>
            </div>
          </div>

          <p className="bio"> {docs.bio}</p>
          <div className="links bio">
            <p>
              <a href={docs.blog} rel="noreffer">
                {docs.blog}
              </a>
            </p>
            <p>
              <a href={docs.html_url}>{docs.html_url}</a>
            </p>
          </div>

          <div className="follower_container flex">
            <p>
              {" "}
              <span>{docs.followers}</span> <span>followers</span>
            </p>{" "}
            <p>
              <span>{docs.following}</span> .<span>following</span>
            </p>
          </div>

          <p className="repo_count flex">
            <span>Public Repository</span>{" "}
            <span className="repo_no">{docs.public_repos}</span>
          </p>
        </div>
      )}
    </>
  );
}
