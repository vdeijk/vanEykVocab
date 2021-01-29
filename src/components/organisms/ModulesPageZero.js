import React, { useEffect } from "react";
import ModulesMainTopButtons from "../molecules/ModulesMainTopButtons";
import { useGlobalContext } from "../../context/context";

const ModulesPageZero = () => {
  const {
    modules,
    wordData,
    clearInput,
    togglePopup,
    handleInput,
  } = useGlobalContext();

  const { showPopup, inputValue } = modules;

  useEffect(clearInput, []);

  return (
    <div className="main-window">
      <ModulesMainTopButtons
        modulesShowPopup={showPopup}
        togglePopup={togglePopup}
      />
      <div className="main-window__heading">
        <h3>{wordData.name}</h3>
      </div>
      <p className="app-dashboard__p">{wordData.wordExampleOne}</p>
      <br></br>
      <p className="app-dashboard__p">
        In the above sentence, what does {wordData.nameLowerCase} mean?
      </p>
      <input
        type="text"
        name="name"
        className="app-dashboard__input"
        onChange={handleInput}
        value={inputValue}
      />
    </div>
  );
};

export default ModulesPageZero;
