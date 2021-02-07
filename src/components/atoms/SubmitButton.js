import React from "react";

const SubmitButton = (props) => {
  return (
    <button
      name="submit"
      className="modules__button"
      onClick={props.handleSubmit}
    >
      {props.buttonValue}
    </button>
  );
};

export default SubmitButton;
