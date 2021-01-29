import React, { useEffect } from "react";
import ModulesMainTopButtons from "../molecules/ModulesMainTopButtons";
import { useGlobalContext } from "../../context/context";

const ModulesPageThree = () => {
  const { modules, wordData, clearInput, togglePopup } = useGlobalContext();
  const { showPopup } = modules;

  useEffect(clearInput, []);

  return (
    <div className="main-window">
      <ModulesMainTopButtons
        modulesShowPopup={showPopup}
        togglePopup={togglePopup}
      />
      <div className="main-window__heading">
        <h3>The definition of {wordData.nameLowerCase}</h3>
      </div>
      <p className="app-dashboard__p">
        {wordData.name}: {wordData.wordDefinition}
        <br></br>
        <br></br>
        To translate:&nbsp;
        <a
          href="https://translate.google.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Translate
        </a>
      </p>
      <br></br>
      <p className="app-dashboard__p">
        In your own words, what does {wordData.nameLowerCase} mean?
      </p>
      <input type="text" name="name" className="app-dashboard__input" />
    </div>
  );
};

export default ModulesPageThree;
