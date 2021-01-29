import React from "react";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";

const DashboardSocialIcons = () => {
  return (
    <div className="siderbar-container ">
      <div className="sidebar__heading">
        <h3 className="h3">Coming soon</h3>
      </div>
      <div className="social-icons">
        <div className="social-icons__container">
          <IoLogoTwitter className="social-icons__icon" />
        </div>
        <div className="social-icons__container">
          <IoLogoFacebook className="social-icons__icon" />
        </div>
        <div className="social-icons__container">
          <IoLogoLinkedin className="social-icons__icon" />
        </div>
      </div>
    </div>
  );
};

export default DashboardSocialIcons;
