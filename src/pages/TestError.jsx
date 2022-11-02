import{ useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { NavBar, Profile } from "../components";
import ErrorFallBack from "./ErrorFallBack";

export default function TestError() {
  const [user, setUser] = useState("");
  const Bom = ({ user }) => {
    if (user === "ibimina") {
       throw new Error("Why na?");
    } else {
      return (
        <>
        <h1></h1>
          <p className="hello">Hello {user} </p>
        </>
      );   }
  };

  console.log(user);
  return (
    <>
    <NavBar/>
    <Profile/>
      <div className="test">
        <h2 className="title">Let's Test your Error Boundary 🤔</h2>
        <input
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          placeholder="Don't enter ibimina"
        />
        <ErrorBoundary
          FallbackComponent={ErrorFallBack}
          onReset={() => setUser("")}
          resetKeys={[user]}
        >
          <Bom user={user} />
        </ErrorBoundary>
      </div>
    </>
  );
}
