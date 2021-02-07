import React, { useEffect } from "react";
import SubmitButton from "../atoms/SubmitButton";
import OptionButtons from "../atoms/OptionButtons";
import ModulesSidebar from "../molecules/ModulesSidebar";
import ModulesPageContainer from "../molecules/ModulesPageContainer";
import { useGlobalContext } from "../../context/context";
import { useParams } from "react-router-dom";
import { setData, saveData } from "../../calculations/calculations";
import { Redirect } from "react-router-dom";

const AppModules = () => {
  const {
    modules,
    allData,
    buttonValues,
    handleSubmit,
    handleProgress,
    setMastery,
    setAllData,
  } = useGlobalContext();

  const { pageDisplayed, answeredCorrectly, moduleMastery } = modules;
  const { id } = useParams();

  useEffect(() => {
    pageDisplayed === 0 && !moduleMastery && fetchData();
    pageDisplayed >= 2 && postData();
  }, [pageDisplayed]);

  const fetchData = async () => {
    const allDataTemp = await setData(id);
    setAllData(allDataTemp);
  };

  const postData = async () => {
    const masteryTemp = await saveData(answeredCorrectly, id);
    setMastery(masteryTemp);
  };

  const buttonValue = buttonValues[pageDisplayed];
  let button;

  if (pageDisplayed === 1) {
    button = <OptionButtons handleProgress={handleProgress} />;
  } else {
    button = (
      <SubmitButton buttonValue={buttonValue} handleSubmit={handleSubmit} />
    );
  }

  return (
    <div>
      {moduleMastery && pageDisplayed === 0 && <Redirect to="/" />}
      <div className="modules">
        <div className="modules__side">
          <ModulesSidebar allData={allData} />
        </div>

        <div className="modules__main">
          <ModulesPageContainer
            pageDisplayed={pageDisplayed}
            wordData={allData.wordData}
          />
        </div>
        {button}
      </div>
    </div>
  );
};

export default AppModules;
