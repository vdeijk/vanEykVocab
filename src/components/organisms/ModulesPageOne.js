import React from "react";
import ModulesMainTopButtons from "../molecules/ModulesMainTopButtons";
import { useGlobalContext } from "../../context/context";

const ModulesPageOne = () => {
  const { modules, wordData, togglePopup } = useGlobalContext();

  const { showPopup, inputValue } = modules;

  return (
    <div className="main-window">
      <ModulesMainTopButtons
        modulesShowPopup={showPopup}
        togglePopup={togglePopup}
      />
      <div className="main-window__heading">
        <h3>{wordData.name} </h3>
      </div>
      <p className="app-dashboard__p">Definition: {wordData.wordDefinition}</p>
      <br></br>
      <p className="app-dashboard__p">Your answer: {inputValue}</p>
      <br></br>
      <p className="app-dashboard__p">
        How well do you understand this meaning of {wordData.nameLowerCase}?
      </p>
    </div>
  );
};

export default ModulesPageOne;
