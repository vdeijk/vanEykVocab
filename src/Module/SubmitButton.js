import React, { Component } from "react";
import { connect } from "react-redux";

class SubmitButton extends Component {
  render() {
    return (
      <input
        type="button"
        className="btn-app"
        name="submit"
        id="submitButton"
        value={this.props.buttonValue}
        onClick={this.props.handleSubmit}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    buttonValue: state.buttonValue,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: () =>
      dispatch({
        type: "HANDLE_SUBMIT",
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SubmitButton);
