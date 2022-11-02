import React from 'react'

export default function ErrorFallBack({error,resetErrorBoundary}) {
  return (
    <div role="alert" className='fallback'>
      <p>something went wrong</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>try again</button>
    </div>
  );
}
