import React from "react";
import ModulesTopButtons from "../molecules/ModulesTopButtons";
import { useGlobalContext } from "../../context/context";

const ModulesOneQuestion = (props) => {
  const { modules, togglePopup } = useGlobalContext();
  const { showPopup, inputValue } = modules;
  const wordData = props.wordData;

  return (
    <>
      <ModulesTopButtons
        modulesShowPopup={showPopup}
        togglePopup={togglePopup}
      />
      <h3>{wordData.name} </h3>
      <p>Definition: {wordData.wordDefinition}</p>
      <p>Your answer: {inputValue}</p>
      <h3>
        How well do you understand this meaning of {wordData.nameLowerCase}?
      </h3>
    </>
  );
};

export default ModulesOneQuestion;
