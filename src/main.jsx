import React from "react";
import ReactDOM from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter } from "react-router-dom";
import ErrorFallBack from "./pages/ErrorFallBack";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorBoundary FallbackComponent={ErrorFallBack}>
        <App />
      </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>
);
