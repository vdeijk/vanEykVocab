import React from "react";
import ModulesTopButtons from "../molecules/ModulesTopButtons";
import { useGlobalContext } from "../../context/context";

const ModulesTwoIncorrect = (props) => {
  const { modules, togglePopup } = useGlobalContext();
  const { showPopup } = modules;
  const wordData = props.wordData;

  return (
    <>
      <ModulesTopButtons
        modulesShowPopup={showPopup}
        togglePopup={togglePopup}
      />
      <h3>{wordData.name}</h3>
      <p>Let's continue with this word.</p>
    </>
  );
};

export default ModulesTwoIncorrect;
