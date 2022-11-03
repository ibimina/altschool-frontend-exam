import React from 'react'
import { HelmetProvider,Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

export default function Redirect() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>404 page</title>
        <meta name="description" content="Redirect page" />
      </Helmet>
      <div>
        <Link to="/">home</Link>
      </div>
    </HelmetProvider>
  );
}
