import React from "react";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Profile,NavBar } from "../components";
import useFetch from "../hooks/useFetch";
import"./repositorylist.css"

export default function RepositoryList() {
    const [page, setPage] = useState(1);
    let url = `https://api.github.com/users/ibimina/repos?page=${page}&per_page=10`;
    const { state } = useFetch(url)
    const { loading, docs } = state;
 
    let pages = 8;
  return (
    <>
      <NavBar />
      <div className="repolist_container">
        <Profile />

        {loading && <p className="loading">loading</p>}
        <div className="repo">
          <h2>Repository</h2>
          {docs &&
            docs.map((doc) => (
              <div key={doc.id} className="repository">
                <Link
                  to={`ibimina/${doc.name}`}
                  state={{ doc: doc }}
                  className="outlet_link"
                >
                  {doc.name}
                </Link>
              </div>
            ))}
          <div className="btn_wrap">
            <button
              disabled={page <= 1}
              onClick={() => setPage((prev) => prev - 1)}
              className="btn"
            >
              prev
            </button>
            {Array.from({ length: pages }, (value, index) => index + 1).map(
              (btn) => (
                <button key={btn} onClick={() => setPage(btn)} className="btn">
                  {btn}
                </button>
              )
            )}
            <button
              disabled={page >= 8}
              onClick={() => setPage((prev) => prev + 1)}
              className="btn"
            >
              next
            </button>
          </div>
        </div>

        <Outlet />
      </div>
    </>
  );
}
