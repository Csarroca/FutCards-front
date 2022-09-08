import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import useUser from "../../hooks/user/useUser";
import NavbarStyled from "./NavbarStyled";

const Navbar = () => {
  const { logout } = useUser();

  const { pathname } = useLocation();

  const handleLogout = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    logout();
  };

  const isRendered =
    pathname === "/myTeam" || pathname === "/cards" || pathname === "/create";

  const isActive = pathname === "/cards" || pathname === "/create";

  return (
    <>
      {isRendered && (
        <NavbarStyled>
          <nav className="navbar">
            <ul className="navbar-list">
              <li className="navbar-list__link">Filter</li>
              <li>
                <NavLink
                  to="/create"
                  className={`navbar-list__link ${
                    isActive ? "navbar-list__link--active" : ""
                  }`}
                >
                  Create card
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/cards"
                  className={`navbar-list__link ${
                    isActive ? "navbar-list__link--active" : ""
                  }`}
                >
                  Cards
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/myTeam"
                  className={`navbar-list__link ${
                    isActive ? "navbar-list__link--active" : ""
                  }`}
                >
                  My team
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/login"
                  className="navbar-list__link"
                  onClick={handleLogout}
                >
                  Logout
                </NavLink>
              </li>
            </ul>
          </nav>
        </NavbarStyled>
      )}
    </>
  );
};
export default Navbar;
