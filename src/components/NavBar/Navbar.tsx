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

  const isRendered = pathname !== ("/login" || "/register");
  return (
    <>
      {isRendered && (
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
                <NavLink to="/cards" className="navbar-list__link ">
                  Cards
                </NavLink>
              </li>
              <li>
                <NavLink to="/my-team" className="navbar-list__link">
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
