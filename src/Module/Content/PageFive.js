import React, { Component } from "react";
import { wordData } from "../../Server/ServerFunctions";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import Popup from "./Popup";

class PageFive extends Component {
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
          <h3 className="h3_app">{wordData.name}</h3>
        </div>
        <p className="p_app">
          This word has other important meanings too:&nbsp;
          <a
            href="https://www.oxfordlearnersdictionaries.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Oxford Learn's Dictionaries
          </a>
        </p>
      </div>
    );
  }
}

export default PageFive;
