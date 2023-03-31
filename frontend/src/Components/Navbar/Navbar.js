import React, { useEffect } from "react";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav-container">
        <a className="home" href="/">
          Home
        </a>
        <a className="account" href="/account">
          Account
        </a>
        <a className="package" href="/package">
          Package
        </a>
        <a className="profile" href="/profile">
          Profile
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
