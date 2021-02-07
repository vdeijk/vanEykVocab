import React, { useEffect } from "react";
import ModulesTopButtons from "../molecules/ModulesTopButtons";
import { useGlobalContext } from "../../context/context";

const ModulesThreeDefinition = (props) => {
  const { modules, clearInput, togglePopup } = useGlobalContext();
  const { showPopup } = modules;
  const wordData = props.wordData;

  useEffect(clearInput, []);

  return (
    <>
      <ModulesTopButtons
        modulesShowPopup={showPopup}
        togglePopup={togglePopup}
      />
      <h3>The definition of {wordData.nameLowerCase}</h3>
      <p>
        {wordData.name}: {wordData.wordDefinition}
      </p>
      <p>
        To translate:&nbsp;
        <a
          href="https://translate.google.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Translate
        </a>
      </p>
      <h3>In your own words, what does {wordData.nameLowerCase} mean?</h3>
      <input type="text" name="name" />
    </>
  );
};

export default ModulesThreeDefinition;
