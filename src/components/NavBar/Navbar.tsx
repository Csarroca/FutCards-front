import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <li>Filter</li>
      <li>
        <Link to="/create">Create cards</Link>
      </li>
      <li>
        <Link to="/cards">Cards</Link>
      </li>
      <li>
        <Link to="/MyTeam">My team</Link>
      </li>
    </div>
  );
};
export default Navbar;
