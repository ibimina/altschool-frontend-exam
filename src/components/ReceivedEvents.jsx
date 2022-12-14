import React, {useState } from "react";
import useFetch from "../hooks/useFetch";
import Loading from "./Loading";
import Event from "./Event";

export default function ReceivedEvents() {
  const [page, setPage] = useState(1);
  const { state } = useFetch(
    `https://api.github.com/users/ibimina/received_events?page=${page}&per_page=30`
  );
  const { loading, docs } = state;
console.log(docs)
  return (
    <div className="events">
      <h3 className="bio">Explore</h3>
      {loading && <Loading />}
      {docs &&
        docs.map((doc) => (
          doc.type !== "CreateEvent" &&
          <div key={doc.id} className="event_card">
            <Event
              url={doc.repo.url}
              doc={doc}
              text={
                doc.type === "WatchEvent"
                  ? "starred a repository"
                  : doc.type === "ForkEvent"
                  ? "forked a repository"
                  : doc.type === "MemberEvent"
                  ? "added a collaborator"
                  : ""
              }
            />
          </div>
        ))}
      <div className="btn_con">
        <button
          disabled={page === 1}
          onClick={() => setPage((prev) => prev - 1)}
        >
          {"<"}
        </button>
        <button
          disabled={page === 2}
          onClick={() => setPage((prev) => prev + 1)}
        >
          {">"}
        </button>
      </div>
    </div>
  );
}
