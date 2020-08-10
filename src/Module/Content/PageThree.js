import React, { Component } from "react";
import { wordData } from "../../Server/ServerFunctions";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Popup from "./Popup";

class PageThree extends Component {
  constructor(props) {
    super(props);
    this.state = { showPopup: false };
  }

  componentDidMount() {
    this.props.inputReset();
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
          <h3 className="h3_app">The definition of {lowerCaseWord}</h3>
        </div>
        <p className="p_app">
          {wordData.name}: {wordData.wordDefinition}
          <br></br>
          To translate:&nbsp;
          <a
            href="https://translate.google.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Translate
          </a>
        </p>
        <br></br>
        <p className="p_app-red">
          In your own words, what does {lowerCaseWord} mean?
        </p>
        <input type="text" name="name" className="input_app" />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInput: (event) =>
      dispatch({
        type: "HANDLE_INPUT",
        value: event.target.value,
      }),
    inputReset: () =>
      dispatch({
        type: "INPUT_RESET",
      }),
  };
};

export default connect(null, mapDispatchToProps)(PageThree);
