import React from "react";

const OptionButtons = (props) => {
  return (
    <div className="modules__buttons">
      <button
        className="buttons__page-one"
        name="buttonNotReally"
        onClick={props.handleProgress}
      >
        Not really
      </button>
      <button
        className="buttons__page-one"
        name="buttonSomewhat"
        onClick={props.handleProgress}
      >
        Somewhat
      </button>
      <button
        className="buttons__page-one"
        name="buttonFully"
        onClick={props.handleProgress}
      >
        Fully
      </button>
    </div>
  );
};

export default OptionButtons;
