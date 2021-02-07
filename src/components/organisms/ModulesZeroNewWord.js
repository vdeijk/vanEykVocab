import React, { useEffect } from "react";
import ModulesTopButtons from "../molecules/ModulesTopButtons";
import { useGlobalContext } from "../../context/context";

const ModulesZeroNewWord = (props) => {
  const { modules, clearInput, togglePopup, handleInput } = useGlobalContext();
  const { showPopup, inputValue } = modules;
  const wordData = props.wordData;

  useEffect(clearInput, []);

  return (
    <>
      <ModulesTopButtons
        modulesShowPopup={showPopup}
        togglePopup={togglePopup}
      />
      <h3>{wordData.name}</h3>
      <p>{wordData.wordExampleOne}</p>
      <h3>In the above sentence, what does {wordData.nameLowerCase} mean?</h3>
      <input
        type="text"
        name="name"
        onChange={handleInput}
        value={inputValue}
      />
    </>
  );
};

export default ModulesZeroNewWord;
