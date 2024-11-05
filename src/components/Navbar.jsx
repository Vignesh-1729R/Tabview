import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../saas/navbar.scss";

const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className={`navbar-item ${location.pathname === "/" ? "active" : ""}`}>
          <Link to="/">Home</Link>
        </li>
        <li className={`navbar-item ${location.pathname === '/table' ? "active" : ""}`}>
          <Link to="/table">Table View</Link>
        </li>
        <li className={`navbar-item ${location.pathname === '/cards' ? "active" : ""}`}>
          <Link to="/cards">Cards View</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
