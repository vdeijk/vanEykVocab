import React, { Component } from "react";
import { wordData } from "../../Server/ServerFunctions";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import Popup from "./Popup";

class PageSeven extends Component {
  constructor(props) {
    super(props);
    this.state = { showPopup: false };
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup,
    });
  }

  render() {
    return (
      <div className="main_window-app">
        {this.state.showPopup ? <Popup /> : null}
        <Link className="navItem" to="/">
          <IoIosCloseCircleOutline className="app_icon" />
        </Link>
        <IoIosHelpCircleOutline
          className="app_icon"
          onClick={this.togglePopup.bind(this)}
        />
        <div className="MainApp_heading">
          <h1 className="h3_app">{wordData.name}</h1>
        </div>
        <p className="p_app">You have mastered this list!</p>
      </div>
    );
  }
}

export default PageSeven;
