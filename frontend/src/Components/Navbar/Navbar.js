import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav-container">
        <Link className="home" to="/">
          Home
        </Link>
        <Link className="account" to="/account">
          Account
        </Link>
        <Link className="package" to="/package">
          Package
        </Link>
        <Link className="profile" to="/profile">
          Profile
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
