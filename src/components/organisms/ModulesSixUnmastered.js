import React from "react";
import ModulesTopButtons from "../molecules/ModulesTopButtons";
import { useGlobalContext } from "../../context/context";

const ModulesSixUnmastered = (props) => {
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
      <p>Let's move on to the next word.</p>
    </>
  );
};

export default ModulesSixUnmastered;
