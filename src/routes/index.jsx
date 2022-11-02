import { Route, Routes } from "react-router-dom";
import RepositoryList from "../pages/RepositoryList";
import Redirect from "../pages/Redirect";
import Single from "../pages/Single";
import TestError from "../pages/TestError";

export default function AppRoute() {
  return (
    <>
      <Routes>
        <Route path="/"  element={<RepositoryList />}>
          <Route path="ibimina/:id" element={<Single />} />
        </Route>
        <Route path="test" element={<TestError />} />
        <Route path="*" element={<Redirect />} />
      </Routes>
      
    </>
  );
}
