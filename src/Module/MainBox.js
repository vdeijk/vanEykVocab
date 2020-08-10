import React, { Component } from "react";
import QuestionBox from "./QuestionBox";
import SideApp from "./SideApp";
import SubmitButton from "./SubmitButton";
import UpdateButtons from "./UpdateButtons";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class MainBox extends Component {
constructor(props) {
super(props);
this.props.setInitialState();
}

  render() {
    let buttonDisplayed = 0;

    switch (this.props.pageDisplayed) {
      case 1:
        buttonDisplayed = <UpdateButtons />;
        break;
      default:
        buttonDisplayed = <SubmitButton />;
        break;
    }

    return (
      <div>
        <div className="Dashboard-app">
          <div className="DashboardSide-app">
            <SideApp />
            <input type="button" name="name" className="btn-app" value="Reset (different word)" onClick={this.props.setInitialState}/>
            </div>
            
          <div className="DashboardMain-app">
            <QuestionBox />
            {buttonDisplayed}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    pageDisplayed: state.pageDisplayed,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setInitialState: () =>
      dispatch({
        type: "SET_INITIAL_STATE",
      }),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainBox));
