import React from "react";
import ModulesMainTopButtons from "../molecules/ModulesMainTopButtons";
import { useGlobalContext } from "../../context/context";

const ModulesPageUnmasteredWord = () => {
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
      <p className="app-dashboard__p">Let's move on to the next word.</p>
    </div>
  );
};

export default ModulesPageUnmasteredWord;