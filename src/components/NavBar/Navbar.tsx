import React from "react";
import { NavLink } from "react-router-dom";
import NavbarStyled from "./NavbarStyled";

const Navbar = () => {
  return (
    <NavbarStyled>
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-list__link">Filter</li>
          <li>
            <NavLink to="/create" className="navbar-list__link">
              Create card
            </NavLink>
          </li>

          <li>
            <NavLink to="/cards" className="navbar-list__link">
              Cards
            </NavLink>
          </li>
          <li>
            <NavLink to="/MyTeam" className="navbar-list__link">
              My team
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" className="navbar-list__link">
              Logout
            </NavLink>
          </li>
        </ul>
      </nav>
    </NavbarStyled>
  );
};
export default Navbar;
