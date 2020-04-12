import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
  <nav>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
    <li>
      <Link to="/articles-list">Articles</Link>
    </li>
  </nav>
);

export default NavBar;
