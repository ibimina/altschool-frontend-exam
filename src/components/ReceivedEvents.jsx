import React from "react";
import useFetch from "../hooks/useFetch";
import { formatDistanceStrict } from "date-fns";
export default function ReceivedEvents() {
  const { state } = useFetch(
    `https://api.github.com/users/ibimina/received_events?per_page=8&&page=1`
  );
  const { loading, docs } = state;
  console.log(docs);

  return (
    <div className="events">
      <h3 className="bio">Explore</h3>
      {loading && (
        <div className="loading">
          <img
            src="/assets/icons8-preloader-64.png"
            alt="loading icon"
            className="load_img"
          />
        </div>
      )}
      {docs &&
        docs.map((doc) => (
          <div key={doc.id}>
            {doc.type === "CreateEvent" && (
              <>
                <div className="space-bt">
                  <div className="flex">
                    <div className="con">
                      <img src={doc.actor.avatar_url} className="event_img" />
                      <span className="st create"></span>
                    </div>
                    <p>{doc.actor.login}</p>
                    <p>created a repository</p>
                  </div>
                  <p>
                    {formatDistanceStrict(new Date(), new Date(doc.created_at))}{" "}
                    ago
                  </p>
                </div>

                <div className="card">
                  <div className="flex">
                    <img src={doc.actor.avatar_url} className="repo_avatar" />
                    <p>{doc.repo.name}</p>
                  </div>

                  <p>{doc.payload.description}</p>
                </div>
              </>
            )}

            {doc.type === "WatchEvent" && (
              <>
                <div className="space-bt">
                  <div className="flex">
                    <div className="con">
                      <img src={doc.actor.avatar_url} className="event_img" />
                      <span className="st watch"></span>
                    </div>
                    <p>{doc.actor.login}</p>
                    <p>starred a repository</p>
                  </div>
                  <p>
                    {formatDistanceStrict(new Date(), new Date(doc.created_at))}{" "}
                  </p>
                </div>

                <div className="card">
                  <div className="flex">
                    <p>{doc.repo.name}</p>
                  </div>
                </div>
              </>
            )}
            {doc.type === "ForkEvent" && (
              <>
                <div className="space-bt">
                  <div className="flex">
                    <div className="con">
                      <img src={doc.actor.avatar_url} className="event_img" />
                      <span className="st fork"></span>
                    </div>

                    <p>{doc.actor.login}</p>
                    <p>forked a repository</p>
                  </div>
                  <p>
                    {formatDistanceStrict(new Date(), new Date(doc.created_at))}{" "}
                  </p>
                </div>

                <div className="card">
                  <div className="flex">
                    <img src={doc.org.avatar_url} className="repo_avatar" />
                    <p>{doc.repo.name}</p>
                  </div>
                  <div className="flex gap">
                    <img src="/assets/icons8-bg-star.png" className="star" />{" "}
                    <span> {doc.payload.forkee.stargazers_count} </span>
                  </div>
                  <p>
                    created{" "}
                    {formatDistanceStrict(
                      new Date(),
                      new Date(doc.payload.forkee.created_at)
                    )}{" "}
                    ago
                  </p>
                </div>
              </>
            )}
            {doc.type === "MemberEvent" && (
              <>
                <div className="space-bt">
                  <div className="flex">
                    <div className="con">
                      <img src={doc.actor.avatar_url} className="event_img" />
                      <span className="st colab"></span>
                    </div>
                    <p>{doc.actor.login}</p>
                    <p>added a collaborator</p>
                  </div>
                  <p>
                    {formatDistanceStrict(new Date(), new Date(doc.created_at))}{" "}
                  </p>
                </div>
                <div className="card">
                  <div className="flex">
                    <img
                      src={doc.payload.member.avatar_url}
                      className="repo_avatar"
                    />
                    <p>{doc.repo.name}</p>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
    </div>
  );
}
