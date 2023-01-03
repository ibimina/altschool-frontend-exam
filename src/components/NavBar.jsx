import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./navbar.css";
export default function NavBar() {
  const [isopen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate()
  const handleSubmit=(e)=>{
    e.preventDefault()
    navigate(`/search?users=${search}`)
    setSearch("")
  }
  return (
    <header>
      <h1>IBrepolist</h1>
      <nav data-visible={isopen}>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            name="search"
            id=""
            placeholder="Search  User..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            required
          />
        </form>
        <ul>
          <li className="nav_list">
            <NavLink
              to="/"
              className="nav_link"
              end
              onClick={() => setIsOpen(false)}
            >
              home
            </NavLink>
          </li>
          <li className="nav_list">
            <NavLink
              to="/repositories"
              className="nav_link"
              end
              onClick={() => setIsOpen(false)}
            >
              repositories
            </NavLink>
          </li>
          <li className="nav_list">
            <NavLink
              to="/test"
              className="nav_link"
              onClick={() => setIsOpen(false)}
            >
              test
            </NavLink>
          </li>
        </ul>
      </nav>
      <button
        onClick={() => (!isopen ? setIsOpen(true) : setIsOpen(false))}
        className={`mobile_navigation ${isopen ? "open" : ""}`}
        aria-expanded={isopen}
      ></button>
    </header>
  );
}
