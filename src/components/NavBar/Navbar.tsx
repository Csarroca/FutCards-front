import React from "react";
import { Link } from "react-router-dom";
const navbar = () => {
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
        <Link to="/My team">My team</Link>
      </li>
    </div>
  );
};
export default navbar;
