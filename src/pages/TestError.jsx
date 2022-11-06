import { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Footer, NavBar } from "../components";
import { HelmetProvider, Helmet } from "react-helmet-async";
import ErrorFallBack from "./ErrorFallBack";

export default function TestError() {
  const [user, setUser] = useState("");
  const NameBug = ({ user }) => {
    if (user === "ibimina") {
      throw new Error("User triggered an error ");
    } else {
      return <p className="hello">Hello {user}</p>;
    }
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Error boundary test</title>
          <meta
            name="description"
            content="A page that test react-error-boundary"
          />
        </Helmet>
        <NavBar />
        <div className="test">
          <h2 className="title">Let's Test your Error Boundary 🤔</h2>
          <p className="bio">
            Do not enter "ibimina" as this will trigger an error
          </p>
          <input
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            placeholder="Enter your first name"
          />
          <ErrorBoundary
            FallbackComponent={ErrorFallBack}
            onReset={() => setUser("")}
            resetKeys={[user]}
          >
            <NameBug user={user} />
          </ErrorBoundary>
        </div>
        <Footer />
      </HelmetProvider>
    </>
  );
}
