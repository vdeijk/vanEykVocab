import React from 'react';
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";

function SocialIcons() {     
      return (
            <div className="siderbar_container ">
                <div className="sidebar_heading-container">
            <h3 className="h3_app">Coming soon</h3>
            </div>
            <div className="social_container">
                <div className="social_container-icons">
                    <IoLogoTwitter className="Social_icons" />
                </div>
                <div className="social_container-icons">
                    <IoLogoFacebook className="Social_icons" />
                </div>
                <div className="social_container-icons">
                    <IoLogoLinkedin className="Social_icons" />  
                </div> 
            </div>
          </div>
      );
    }

export default SocialIcons;
