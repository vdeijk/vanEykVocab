import React, { useEffect } from "react";
import { useGlobalContext } from "../../context/context";
import ModulesMainTopButtons from "../molecules/ModulesMainTopButtons";

const ModulesPageFour = () => {
  const {
    modules,
    wordData,
    clearInput,
    counterUpdate,
    togglePopup,
    handleInput,
  } = useGlobalContext();

  const { inputCounter, inputValue, showPopup } = modules;

  useEffect(clearInput, []);

  return (
    <div className="main-window">
      <ModulesMainTopButtons
        modulesShowPopup={showPopup}
        togglePopup={togglePopup}
      />
      <div className="main-window__heading">
        <h3>Example sentences with {wordData.nameLowerCase}</h3>
      </div>
      <p className="app-dashboard__p">
        - {wordData.wordExampleTwo}
        <br></br>
        <br></br>- {wordData.wordExampleThree}
        <br></br>
        <br></br>- {wordData.wordExampleFour}
        <br></br>
      </p>
      <br></br>
      <p className="app-dashboard__p">
        Can you make up some example sentences of your own?
      </p>
      <input
        type="text"
        name="name"
        className="app-dashboard__input"
        onChange={handleInput}
        value={inputValue}
      />
      <p className="app-dashboard__p">{inputCounter}</p>
      <br></br>
      <div>
        <input
          type="button"
          className="btn-app btn-app__counter-update"
          name="submit"
          id="submitButton"
          value="Submit Sentence"
          onClick={counterUpdate}
        />
      </div>
    </div>
  );
};

export default ModulesPageFour;
