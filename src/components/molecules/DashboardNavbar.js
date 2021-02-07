import React from "react";
import { Link } from "react-router-dom";

const DashboardNavbar = () => {
  return (
    <nav className="main-nav__bottom">
      <Link className="main-nav__link" to="/">
        Modules
      </Link>
      <Link className="main-nav__link" to="/help">
        Help
      </Link>
      <Link className="main-nav__link" to="/about">
        About
      </Link>
      <Link className="main-nav__link" to="/account">
        Account
      </Link>
    </nav>
  );
};

export default DashboardNavbar;
