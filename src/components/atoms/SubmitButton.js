import React from "react";

const SubmitButton = (props) => {
  return (
    <input
      type="button"
      className="btn-app"
      name="submit"
      id="submitButton"
      value={props.buttonValue}
      onClick={props.handleSubmit}
    />
  );
};

export default SubmitButton;
