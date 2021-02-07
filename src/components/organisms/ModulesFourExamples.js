import React, { useEffect } from "react";
import { useGlobalContext } from "../../context/context";
import ModulesTopButtons from "../molecules/ModulesTopButtons";

const ModulesFourExamples = (props) => {
  const {
    modules,
    clearInput,
    counterUpdate,
    togglePopup,
    handleInput,
  } = useGlobalContext();

  const { inputCounter, inputValue, showPopup } = modules;
  const wordData = props.wordData;

  useEffect(clearInput, []);

  return (
    <>
      <ModulesTopButtons
        modulesShowPopup={showPopup}
        togglePopup={togglePopup}
      />
      <h3>Example sentences with {wordData.nameLowerCase}</h3>
      <p>- {wordData.wordExampleTwo}</p>
      <p>- {wordData.wordExampleThree}</p>
      <p>- {wordData.wordExampleFour} </p>
      <h3>Can you make up some example sentences of your own?</h3>
      <input
        type="text"
        name="name"
        onChange={handleInput}
        value={inputValue}
      />
      <p>{inputCounter}</p>

      <button
        className="buttons__page-four"
        name="submit"
        onClick={counterUpdate}
      >
        Submit Sentence
      </button>
    </>
  );
};

export default ModulesFourExamples;
