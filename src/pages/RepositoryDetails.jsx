import React, { useEffect, useState } from "react";
import { HelmetProvider,Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

export default function RepositoryDetails() {
  const location = useLocation();
  let { doc } = location.state;
 
  let lastUpdate = new Date(doc.updated_at).toDateString()

  return (
    <HelmetProvider>
      <Helmet>
        <title>{doc.name} Repository details</title>
        <meta name="description" content="a single repo details" />
      </Helmet>
      <div className="repo_de">
        <div className="flex space-btw">
          <div className="flex no-space">
            <div>
              <p>{doc.owner.login}</p>
              <a href={doc.svn_url} target="_blank">
                {doc.name}
              </a>
            </div>

            <p className="public">{doc.visibility}</p>
          </div>

          {doc.stargazers_count > 0 && (
            <div className="flex gap  no-space">
              <img
                src="/assets/icons8-golden-star.png"
                className="star"
                alt="golden star icon"
              />
              <p>Starred</p>
            </div>
          )}
          {doc.stargazers_count === 0 && (
            <div className="flex gap">
              <img
                src="/assets/icons8-bg-star.png"
                className="star"
                alt="star icon"
              />
              <p>Star</p>
            </div>
          )}
        </div>
        <div className="flex">
          <div className="flex gap">
            <img src="/assets/icons8-bg-star.png" className="star" />{" "}
            <span> {doc.stargazers_count} star</span>
          </div>

          <div className="flex gap">
            <img
              src="/assets/icons8-forked.png"
              className="star"
              alt="fork icon"
            />
            <p>{doc.forks} fork</p>
          </div>
          <p>{doc.open_issues} issues</p>
           <p>
            Updated on {lastUpdate}
          </p> 
        </div>

        {doc.description && <p>{doc.description}</p>}
        {doc.language === "CSS" && (
          <>
            <p className="flex">
              {" "}
              <span
                style={{
                  backgroundColor: "purple",
                  width: "15px",
                  borderRadius: "50%",
                  height: "15px",
                  display: "inline-block",
                }}
              ></span>
              {doc.language}
            </p>
          </>
        )}
        {doc.language === "Javascript" && (
          <>
            <p className="flex">
              {" "}
              <span
                style={{
                  backgroundColor: "yellow",
                  width: "15px",
                  borderRadius: "50%",
                  height: "15px",
                  display: "inline-block",
                }}
              ></span>
              {doc.language}
            </p>
          </>
        )}
        {doc.language === "HTML" && (
          <>
            <p className="flex">
              {" "}
              <span
                style={{
                  backgroundColor: "red",
                  width: "15px",
                  borderRadius: "50%",
                  height: "15px",
                  display: "inline-block",
                }}
              ></span>
              {doc.language}
            </p>
          </>
        )}

        <a href={doc.html_url} rel="noreferrer" target="_blank">
          view repository on githbub
        </a>
      </div>
    </HelmetProvider>
  );
}
