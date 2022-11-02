import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css"
export default function NavBar() {
  const[isopen,setIsOpen]=useState(false)

  return (
    <header>
      <h1>IB</h1>
      <nav data-visible={isopen}>
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
