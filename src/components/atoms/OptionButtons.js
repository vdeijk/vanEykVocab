import React from "react";

const OptionButtons = (props) => {
  return (
    <div className="option-buttons">
      <input
        type="button"
        className="btn-app btn-app__option-button"
        name="buttonNotReally"
        id="submitButton"
        value="Not really"
        onClick={props.handleProgress}
      />
      <input
        type="button"
        className="btn-app btn-app__option-button"
        name="buttonSomewhat"
        id="submitButton"
        value="Somewhat"
        onClick={props.handleProgress}
      />
      <input
        type="button"
        className="btn-app btn-app__option-button"
        name="buttonFully"
        id="submitButton"
        value="Fully"
        onClick={props.handleProgress}
      />
    </div>
  );
};

export default OptionButtons;
