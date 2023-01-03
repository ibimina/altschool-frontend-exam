import React from "react";
import useFetch from "../hooks/useFetch";
import { formatDistanceStrict, getDate, getMonth } from "date-fns";
import Language from "./Language";

export default function Event({ url, doc,text }) {
  const { state } = useFetch(url);
  const { loading, docs } = state;
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <>
      <div className="space-bt">
        <div className="flex">
          <div className="con">
            <a
              href={`https://github.com/${doc.actor.login}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={doc.actor.avatar_url} className="event_img" />
            </a>
          </div>
          <p>
            <a
              href={`https://github.com/${doc.actor.login}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {doc.actor.login}{" "}
            </a>{" "}
            {text}{" "}
            <a
              href={`https://github.com/${doc.repo.name}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {doc.repo.name}
            </a>{" "}
            {formatDistanceStrict(new Date(), new Date(doc.created_at))} ago
          </p>
        </div>
      </div>
      <div className="card">
        <div className="flexx">
          <a href={docs.html_url} target="_blank" rel="noopener noreferrer">
            {doc.repo.name}
          </a>
          <div className="flex star-bor">
            <img
              src={
                docs.stargazers_count > 0
                  ? "/assets/star.png"
                  : "/assets/icons8-bg-star.png"
              }
              alt="star icon"
              className="star"
            />{" "}
            <p className="small">{docs.stargazers_count > 0 ? " Starred" : "Star"}</p>
          </div>
        </div>
        {docs.description !== null && (
          <p className="event_desc">{docs.description}</p>
        )}
        <div className="flex">
          {doc.type !== "CreateEvent" && (
            <>
              <Language language={docs.language} />
              <div className="f">
                <img src="/assets/icons8-bg-star.png" alt="" className="star" />
                <p className="small">
                  {docs.stargazers_count >= 1000
                    ? (docs.stargazers_count / 1000).toFixed(1) + "k"
                    : docs.stargazers_count > 10000
                    ? (docs.stargazers_count / 10000).toFixed(1) + "k"
                    : docs.stargazers_count > 100000
                    ? (docs.stargazers_count / 100000).toFixed(1) + "k"
                    : docs.stargazers_count}
                </p>
              </div>
            </>
          )}
          <p className="small">
            Updated {getDate(new Date(docs?.updated_at))}{" "}
            {months[getMonth(new Date(docs?.updated_at))]}
          </p>
        </div>
        {doc.type === "ForkEvent" && (
          <>
            <p>{docs.open_issues_count} issues need help</p>
          </>
        )}
      </div>
    </>
  );
}
