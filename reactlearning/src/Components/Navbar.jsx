import React from "react";
import {Link} from "react-router-dom";


const Navbar = () => {
  return (
    <div>
      <ul className="Navbar">
        <li>
          <Link className="Navbar-link" to="/About">
            About
          </Link>
        </li>

        <li>
          <Link className="Navbar-link" to="/">
            Home
          </Link>
        </li>

        <li>
          <Link className="Navbar-link" to="/Contact">
            contact
          </Link>
        </li>
        <li>
          <Link className="Navbar-link" to="/Filterpage">
            Filter
          </Link>
        </li>

        <li>
          <Link className="Navbar-link" to="/Login">
            Login
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
