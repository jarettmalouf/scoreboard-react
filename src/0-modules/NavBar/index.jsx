import "./index.css";

import { Link } from "react-router-dom";
import React from "react";

function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link exact="true" to="/home">
            Home
          </Link>
        </li>
        <li>
          <Link exact="true" to="/sports">
            Sports
          </Link>
        </li>
        <li>
          <Link exact="true" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
