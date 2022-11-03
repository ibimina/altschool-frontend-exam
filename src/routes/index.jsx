import { Route, Routes } from "react-router-dom";
import RepositoryList from "../pages/RepositoryList";
import Redirect from "../pages/Redirect";
import Home from "../pages/Home";
import TestError from "../pages/TestError";
import RepositoryDetails from "../pages/RepositoryDetails";

export default function AppRoute() {
  return (
    <>
      <Routes>
          <Route path="/"  element={<Home/>}/>
        <Route path="repositories"  element={<RepositoryList />}>
          <Route path="ibimina/:id" element={<RepositoryDetails />} />
        </Route>
        <Route path="test" element={<TestError />} />
        <Route path="*" element={<Redirect />} />
      </Routes>
      
    </>
  );
}
