import React, { Component } from "react";
import { wordData } from "../../Server/ServerFunctions";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Popup from "./Popup";

class PageFour extends Component {
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
    let lowerCaseWord = wordData.name.toLowerCase();
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
          <h3 className="h3_app">{wordData.name} </h3>
        </div>
        <p className="p_app">Definition: {wordData.wordDefinition}</p>
        <br></br>
        <p className="p_app">Your answer: {this.props.appInputValue}</p>
        <br></br>
        <p className="p_app-red">
          How well do you understand this meaning of {lowerCaseWord}?{" "}
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    appInputValue: state.appInputValue,
  };
};

export default connect(mapStateToProps, null)(PageFour);
