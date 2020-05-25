import { Link } from "react-router-dom";
import React from "react";

function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link exact to="/home">
            Home
          </Link>
        </li>
        <li>
          <Link exact to="/sports">
            Sports
          </Link>
        </li>
        <li>
          <Link exact to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
