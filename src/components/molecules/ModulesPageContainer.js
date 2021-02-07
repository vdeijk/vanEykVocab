import React from "react";
import ModulesZeroNewWord from "../organisms/ModulesZeroNewWord";
import ModulesOneQuestion from "../organisms/ModulesOneQuestion";
import ModulesTwoIncorrect from "../organisms/ModulesTwoIncorrect";
import ModulesThreeDefinition from "../organisms/ModulesThreeDefinition";
import ModulesFourExamples from "../organisms/ModulesFourExamples";
import ModulesFiveMeanings from "../organisms/ModulesFiveMeanings";
import ModulesSixUnmastered from "../organisms/ModulesSixUnmastered";
import ModulesSevenMastered from "../organisms/ModulesSevenMastered";

const ModulesPageContainer = (props) => {
  const { wordData, pageDisplayed } = props;

  const pages = [
    <ModulesZeroNewWord wordData={wordData} />,
    <ModulesOneQuestion wordData={wordData} />,
    <ModulesTwoIncorrect wordData={wordData} />,
    <ModulesThreeDefinition wordData={wordData} />,
    <ModulesFourExamples wordData={wordData} />,
    <ModulesFiveMeanings wordData={wordData} />,
    <ModulesSixUnmastered wordData={wordData} />,
    <ModulesSevenMastered wordData={wordData} />,
  ];
  const pageContent = pages[pageDisplayed];

  return <div className="main">{pageContent}</div>;
};

export default ModulesPageContainer;
