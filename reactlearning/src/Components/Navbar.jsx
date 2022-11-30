import React from "react";
import { Link,NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <ul className="Navbar">
        <li>
          <NavLink className="Navbar-link" to="/About">
            About
          </NavLink>
        </li>

        <li>
          <NavLink className="Navbar-link" to="/">
            Home
          </NavLink>
        </li>

        <li>
          <NavLink className="Navbar-link" to="/Contact">
            contact
          </NavLink>
        </li>
        <li>
          <NavLink className="Navbar-link" to="/Filterpage">
            Filter
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
