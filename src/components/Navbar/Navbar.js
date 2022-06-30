import React from "react";
import { Link, NavLink } from "react-router-dom";

import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/" className="logo">
        <h1>Book Storage</h1>
      </Link>
      <nav>
        <NavLink to="/">
          <h3>Home</h3>
        </NavLink>
        <NavLink to="/books">
          <h3>Books</h3>
        </NavLink>
        <NavLink to="/statistics">
          <h3>Statistics</h3>
        </NavLink>
      </nav>
    </div>
  );
}
