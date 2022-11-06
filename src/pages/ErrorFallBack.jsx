import React from 'react'

export default function ErrorFallBack({error,resetErrorBoundary}) {
  return (
    <div role="alert" className="fallback">
      <img
        src="/assets/icons8-error-cloud-60.png"
        alt="loading icon"
        className="load_img"
      />
      <p>Something went wrong</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>try again</button>
    </div>
  );
}
