import React, { useEffect } from "react";
import SubmitButton from "../atoms/SubmitButton";
import OptionButtons from "../atoms/OptionButtons";
import ModulesSidebar from "../molecules/ModulesSidebar";
import ModulesPageContainer from "../organisms/ModulesPageContainer";
import { useGlobalContext } from "../../context/context";
import { useParams } from "react-router-dom";
import {
  moduleMastered,
  wordDataCalc,
  moduleDataCalc,
  setInitialData,
  setData,
  saveData,
} from "../../calculations/calculations";
import { Redirect } from "react-router-dom";

export let answeredCorrectly;
export let wordProgress;
export let moduleProgress;

const AppModules = () => {
  const {
    modules,
    wordData,
    moduleData,
    buttonValues,
    handleSubmit,
    handleProgress,
    setDataState,
    setRedirect,
  } = useGlobalContext();

  const { pageDisplayed, redirect } = modules;
  const { id } = useParams();

  useEffect(() => {
    if (pageDisplayed === 0 && modules.initialRound) {
      setInitialData(id);
    }
    if (pageDisplayed === 0) {
      const initialRound = modules.initialRound;
      saveData(id, initialRound);
    }
    if (pageDisplayed === 0 && moduleData.progress < 100) {
      setData(id);
      setDataState(wordDataCalc, moduleDataCalc);
    }
    if (moduleMastered) {
      setRedirect();
    }
    if (pageDisplayed === 6) {
      answeredCorrectly = modules.answeredCorrectly;
      wordProgress = wordData.wordProgress;
      moduleProgress = moduleData.progress;
    }
  }, [pageDisplayed]);

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
      {redirect ? <Redirect to="/" /> : null}
      <div className="app-dashboard">
        <div className="app-sidebar">
          <ModulesSidebar
            wordProgress={wordData.wordProgress}
            moduleData={moduleData}
          />
        </div>

        <div className="app-dashboard__main">
          <ModulesPageContainer pageDisplayed={pageDisplayed} />
          {button}
        </div>
      </div>
    </div>
  );
};

export default AppModules;
