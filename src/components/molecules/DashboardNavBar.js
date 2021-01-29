import React from "react";
import { Link } from "react-router-dom";

const DashboardNavBar = () => {
  return (
    <div>
      <div className="top"></div>
      <nav>
        <div className="main-nav ">
          <Link className="main-nav__item" to="/">
            Modules
          </Link>
          <Link className="main-nav__item" to="/help">
            Help
          </Link>
          <Link className="main-nav__item" to="/about">
            About
          </Link>
          <Link className="main-nav__item" to="/account">
            Account
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default DashboardNavBar;
