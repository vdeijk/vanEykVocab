import React, { Component } from 'react';
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";

class SocialIcons extends Component {     

  render () {
      return (
            <div className="SocialIcons">
                <div>
            <p className="p_SocialIcons">Coming soon</p>
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
          </div>
      );
    }
  }



export default SocialIcons;
