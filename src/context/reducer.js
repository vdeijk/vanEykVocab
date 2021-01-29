const rootReducer = (state, action) => {
  let pageDisplayed;
  let updateModules;

  switch (action.type) {
    case "HANDLE_SUBMIT":
      pageDisplayed = state.modules.pageDisplayed;
      if (
        state.modules.pageDisplayed >= 7 &&
        state.wordData.wordProgress >= 100
      ) {
        pageDisplayed = 0;
      } else if (
        state.modules.pageDisplayed >= 5 &&
        state.wordData.wordProgress >= 100
      ) {
        pageDisplayed = 7;
      } else if (
        state.modules.pageDisplayed >= 5 &&
        state.moduleData.progress >= 100
      ) {
        pageDisplayed = 8;
      } else if (state.modules.pageDisplayed >= 6) {
        pageDisplayed = 0;
      } else {
        pageDisplayed += 1;
      }
      return {
        ...state,
        modules: {
          ...state.modules,
          pageDisplayed: pageDisplayed,
        },
      };

    case "HANDLE_PROGRESS":
      let name = action.payload;
      let wordProgress = state.wordData.wordProgress;
      let moduleProgress = state.moduleData.progress;
      let answeredCorrectly = false;
      if (name === "buttonFully") {
        wordProgress += 25;
        moduleProgress += 25 / state.moduleData.totalWords;
        pageDisplayed = 6;
        answeredCorrectly = true;
      } else {
        wordProgress = 0;
        pageDisplayed = state.modules.pageDisplayed + 1;
      }
      return {
        ...state,
        wordData: { ...state.wordData, wordProgress: wordProgress },
        moduleData: { ...state.moduleData, progress: moduleProgress },
        modules: {
          ...state.modules,
          pageDisplayed: pageDisplayed,
          answeredCorrectly: answeredCorrectly,
        },
      };
    case "SET_DATA_STATE":
      updateModules = { ...state.modules, initialRound: false };
      return {
        ...state,
        wordData: action.payloadWords,
        moduleData: action.payloadModule,
        modules: updateModules,
      };
    case "SET_INITIAL_ROUND":
      updateModules = {
        ...state.modules,
        initialRound: true,
        pageDisplayed: 0,
        redirect: false,
      };
      let updateModuleData = {
        ...state.moduleData,
        name: ``,
        progress: 0,
        totalWords: 0,
      };
      return {
        ...state,
        modules: updateModules,
        wordData: {},
        moduleData: updateModuleData,
      };
    case "HANDLE_INPUT":
      updateModules = { ...state.modules, inputValue: action.payload };
      return {
        ...state,
        modules: updateModules,
      };
    case "CLEAR_INPUT":
      updateModules = { ...state.modules, inputValue: action.payload };
      return {
        ...state,
        modules: updateModules,
      };
    case "COUNTER_UPDATE":
      let inputCounter = state.modules.inputCounter + 1;
      updateModules = {
        ...state.modules,
        inputCounter: inputCounter,
        inputValue: "",
      };
      return {
        ...state,
        modules: updateModules,
      };
    case "SET_SHOW_POPUP":
      updateModules = { ...state.modules, showPopup: action.payload };
      return {
        ...state,
        modules: updateModules,
      };
    case "SET_REDIRECT":
      return {
        ...state,
        modules: { ...state.modules, redirect: true },
      };

    default:
      return state;
  }
};

export default rootReducer;
