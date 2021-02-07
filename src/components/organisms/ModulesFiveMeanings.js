import React from "react";
import ModulesTopButtons from "../molecules/ModulesTopButtons";
import { useGlobalContext } from "../../context/context";

const ModulesFiveMeanings = (props) => {
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
      <p>
        This word has other important meanings too:&nbsp;
        <a
          href="https://www.oxfordlearnersdictionaries.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Oxford Learn's Dictionaries
        </a>
      </p>
    </>
  );
};

export default ModulesFiveMeanings;
