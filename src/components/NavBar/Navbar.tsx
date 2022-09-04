import React from "react";
import { Link } from "react-router-dom";
import NavbarStyled from "./NavbarStyled";

const Navbar = () => {
  return (
    <NavbarStyled>
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-list__link">Filter</li>
          <li>
            <Link to="/create" className="navbar-list__link">
              Create card
            </Link>
          </li>
          <li>
            <Link to="/cards" className="navbar-list__link">
              Cards
            </Link>
          </li>
          <li>
            <Link to="/MyTeam" className="navbar-list__link">
              My team
            </Link>
          </li>
        </ul>
      </nav>
    </NavbarStyled>
  );
};
export default Navbar;
