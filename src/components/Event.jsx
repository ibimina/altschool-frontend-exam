import React from "react";
import useFetch from "../hooks/useFetch";
import {  getDate, getMonth } from "date-fns";
import Language from "./Language";

export default function Event({ url, doc }) {
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
    <div className="card">
      <div className="flexx">
        <a href={docs.html_url} target="_blank" rel="noopener noreferrer">
          {doc.repo.name}
        </a>
        {docs.stargazers_count > 0 && (
          <div className="flex star-bor">
            <img src="/assets/star.png" alt="" className="star" />{" "}
            Starred
          </div>
        )}
        {docs.stargazers_count == 0 && (
          <div className="flex star-bor">
            <img src="/assets/icons8-bg-star.png" alt="" className="star" />{" "}
            Star
          </div>
        )}
      </div>
      {docs.description !== null && <p className="event_desc">{docs.description}</p>}
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
  );
}
