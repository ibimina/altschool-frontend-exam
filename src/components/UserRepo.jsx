import React from "react";
import useFetch from "../hooks/useFetch";

export default function UserRepo({ url }) {
  let rep = `https://api.github.com/users/${url}/repos`;
  const { state } = useFetch(rep);
  const { loading, docs } = state;

  return (
    <div className="link_con">
      {docs &&
        docs.map((repo) => (
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            key={repo.id}
            className="userlink"
          >
            {repo.name}{" "}
          </a>
        ))}
    </div>
  );
}
