import React from "react";
import ModulesMainTopButtons from "../molecules/ModulesMainTopButtons";
import { useGlobalContext } from "../../context/context";

const ModulesPageMasteredWord = () => {
  const { modules, wordData, togglePopup } = useGlobalContext();
  const { showPopup } = modules;

  return (
    <div className="main-window">
      <ModulesMainTopButtons
        modulesShowPopup={showPopup}
        togglePopup={togglePopup}
      />
      <div className="main-window__heading">
        <h1>{wordData.name}</h1>
      </div>
      <p className="app-dashboard__p">You have mastered this word!</p>
    </div>
  );
};

export default ModulesPageMasteredWord;
