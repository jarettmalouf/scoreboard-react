import { Link } from "react-router-dom";
import React from "react";
import styled from "@emotion/styled";

export default function NavBar() {
  return (
    <nav className="navbar">
      <NavItemsList>
        <NavListItem>
          <Link exact="true" to="/home">
            Home
          </Link>
        </NavListItem>
        <NavListItem>
          <Link exact="true" to="/sports">
            Sports
          </Link>
        </NavListItem>
        <NavListItem>
          <Link exact="true" to="/contact">
            Contact
          </Link>
        </NavListItem>
      </NavItemsList>
    </nav>
  );
}

const NavItemsList = styled.ul`
  list-style-type: none;
  text-align: left;
`;

const NavListItem = styled.li`
  display: inline-block;
  margin-right: 20px;
  padding: 2px;
`;
