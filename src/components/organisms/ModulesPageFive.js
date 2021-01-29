import React from "react";
import ModulesMainTopButtons from "../molecules/ModulesMainTopButtons";
import { useGlobalContext } from "../../context/context";

const ModulesPageFive = () => {
  const { modules, wordData, togglePopup } = useGlobalContext();
  const { showPopup } = modules;

  return (
    <div className="main-window">
      <ModulesMainTopButtons
        modulesShowPopup={showPopup}
        togglePopup={togglePopup}
      />
      <div className="main-window__heading">
        <h3>{wordData.name}</h3>
      </div>
      <p className="app-dashboard__p">
        This word has other important meanings too:&nbsp;
        <a
          href="https://www.oxfordlearnersdictionaries.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Oxford Learn's Dictionaries
        </a>
      </p>
    </div>
  );
};

export default ModulesPageFive;
