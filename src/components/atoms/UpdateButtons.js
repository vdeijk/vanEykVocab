import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { appMasteredCalculations } from "../../calculations/calculations";

class UpdateButtons extends Component {
  render() {
    let displayThis;
    if (this.props.currentModuleMastered) {
      displayThis = (
        <Link
          to="/"
          className="btn-app update-buttons"
          onClick={appMasteredCalculations}
        >
          <input
            type="button"
            className="btn-app update-buttons"
            name="submit"
            id="submitButton"
            value="About to master"
          />
        </Link>
      );
    } else {
      displayThis = (
        <input
          type="button"
          className="btn-app update-buttons"
          name="submit"
          id="submitButton"
          value="Fully"
          onClick={this.props.answeredCorrectly}
        />
      );
    }

    return (
      <div className="update_buttons-div">
        <React.Fragment>{displayThis}</React.Fragment>
        <input
          type="button"
          className="btn-app update-buttons"
          name="submit"
          id="submitButton"
          value="Somewhat"
          onClick={this.props.handleSubmit}
        />
        <input
          type="button"
          className="btn-app update-buttons"
          name="submit"
          id="submitButton"
          value="Not really"
          onClick={this.props.handleSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentModuleMastered: state.currentModuleMastered,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: () =>
      dispatch({
        type: "HANDLE_SUBMIT",
      }),

    answeredCorrectly: () =>
      dispatch({
        type: "ANSWERED_CORRECTLY",
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateButtons);
