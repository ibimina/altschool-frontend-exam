import React from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { formatDistanceStrict } from "date-fns";
export default function RepositoryDetails() {
  const location = useLocation();
  let { doc } = location.state;
  let Update = new Date(doc.updated_at);
  let now = new Date();
  let lastUpdate = formatDistanceStrict(now, Update);

  return (
    <HelmetProvider>
      <Helmet>
        <title>{doc.name} Repository details</title>
        <meta name="description" content="a single repo details" />
      </Helmet>
      <div className="repo_de">
        <div className="repo_bg">
          <div className="flex space-btw">
            <div className="flex no-space">
              <div>
                <p className="bold">
                  {" "}
                  {doc.owner.login}
                  /{doc.name}
                </p>
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
          {doc.description && <p className="bio">{doc.description}</p>}
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
            <p>Updated {lastUpdate} ago</p>
          </div>

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

          <a
            href={doc.html_url}
            rel="noreferrer"
            target="_blank"
            className="link"
          >
            View repository on githbub
          </a>
        </div>
      </div>
    </HelmetProvider>
  );
}
