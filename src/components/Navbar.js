import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-brand">
      <img
        src="/images/orca-logo.png"
        alt="OrcaTek logo"
        className="logo-img"
        style={{ height: '40px', marginRight: '1rem' }}
      />
      OrcaTek Solutions
    </div>
    <div className="nav-links">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </div>
  </nav>
);

export default Navbar;
