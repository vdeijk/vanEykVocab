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
          <h3 className="h3_app">Example sentences with {lowerCaseWord}</h3>
        </div>
        <p className="p_app">
          - {wordData.wordExampleTwo}
          <br></br>
          <br></br>- {wordData.wordExampleThree}
          <br></br>
          <br></br>- {wordData.wordExampleFour}
        </p>
        <p className="p_app-red">
          Can you make up some example sentences of your own?
        </p>
        <input type="text" name="name" className="input_app" />
        <p className="p_app">{this.props.appCounter}</p>
        <br></br>
        <div className="btn_app-pageFour">
          <input
            type="button"
            className="btn"
            name="submit"
            id="submitButton"
            value="Submit Sentence"
            onClick={this.props.counterUpdate}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    buttonValue: state.buttonValue,
    appCounter: state.appCounter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleInput: () =>
      dispatch({
        type: "HANDLE_INPUT",
      }),
    counterUpdate: () =>
      dispatch({
        type: "COUNTER_UPDATE",
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PageFour);
