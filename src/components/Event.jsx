import React from 'react'
import useFetch from "../hooks/useFetch";
import { formatDistanceStrict,getDate,getMonth} from "date-fns";

export default function Event({url,doc}) {
      const { state } = useFetch(url);
      const { loading, docs } = state;
      console.log(loading,docs)
      const months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
  return (
    <div className="card">
      <div className="flexx">
        <a href={doc.html_url} target="_blank" rel="noopener noreferrer">
          {doc.repo.name}
        </a>
        {docs.stargazers_count > 0 && <div>Star</div>}
        {docs.stargazers_count == 0 && (
          <div className="flex star-bor">
            <img src="/assets/icons8-bg-star.png" alt="" /> Star
          </div>
        )}
      </div>
      {docs.description !== null && <p>{docs.description}</p>}
      <p>
        Updated {getDate(new Date(docs?.updated_at))}{" "}
        {months[getMonth(new Date(docs?.updated_at))]}
      </p>
    </div>
  );
}
