import React, { Component } from "react";
import { wordData } from "../../Server/ServerFunctions";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { appCalculations } from "../../Server/ServerFunctions";
import { withRouter } from "react-router-dom";
import Popup from "./Popup";

export let activeModuleApp;

class PageZero extends Component {
  constructor(props) {
    super(props);
    activeModuleApp = this.props.match.params.id;
    appCalculations();
    this.state = { showPopup: false };
  }

  togglePopup() {  
    this.setState({  
         showPopup: !this.state.showPopup  
    });  
     }  

  render() {
    
    return (
      <div className="main_window-app">
         {this.state.showPopup ?  <Popup />  : null }  
        <Link className="navItem" to="/">
          <IoIosCloseCircleOutline className="app_icon" />
        </Link>
        <IoIosHelpCircleOutline className="app_icon" onClick={this.togglePopup.bind(this)}/>
        <div className="MainApp_heading">
          <h3 className="h3_app">{wordData.name}</h3>
        </div>
        <p className="p_app">{wordData.wordExampleOne}</p>
        <br></br>
        <p className="p_app-red">
          In the above sentence, what does {wordData.name} mean?
        </p>
        <input
          type="text"
          name="name"
          className="input_app"
          onChange={this.props.handleInput}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentModuleMastered: state.currentModuleMastered
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleInput: (event) =>
      dispatch({
        type: "HANDLE_INPUT",
        value: event.target.value,
      }),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PageZero)
);
