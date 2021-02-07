const rootReducer = (state, action) => {
  let pageDisplayed,
    updateModules,
    allData,
    name,
    answeredCorrectly,
    inputCounter,
    moduleMastery;

  const WORDPROGRESSCONST = 25;

  switch (action.type) {
    case "HANDLE_SUBMIT":
      pageDisplayed = state.modules.pageDisplayed;
      if (pageDisplayed >= 6) pageDisplayed = 0;
      else pageDisplayed += 1;
      return {
        ...state,
        modules: {
          ...state.modules,
          pageDisplayed: pageDisplayed,
        },
      };
    case "HANDLE_PROGRESS":
      name = action.payload;
      answeredCorrectly = false;
      let mastery = state.allData.wordData.wordProgress;
      if (name === "buttonFully" && mastery >= WORDPROGRESSCONST) {
        pageDisplayed = 7;
        answeredCorrectly = true;
      } else if (name === "buttonFully") {
        pageDisplayed = 6;
        answeredCorrectly = true;
      } else pageDisplayed = state.modules.pageDisplayed + 1;
      return {
        ...state,
        modules: {
          ...state.modules,
          pageDisplayed: pageDisplayed,
          answeredCorrectly: answeredCorrectly,
        },
      };
    case "HANDLE_INPUT":
      updateModules = { ...state.modules, inputValue: action.payload };
      return {
        ...state,
        modules: updateModules,
      };
    case "CLEAR_INPUT":
      updateModules = { ...state.modules, inputValue: "" };
      return {
        ...state,
        modules: updateModules,
      };
    case "COUNTER_UPDATE":
      inputCounter = state.modules.inputCounter + 1;
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
    case "SET_MASTERY":
      moduleMastery = action.payload;
      return {
        ...state,
        modules: { ...state.modules, moduleMastery: moduleMastery },
      };
    case "SET_ALLDATA":
      allData = action.payload;
      return {
        ...state,
        allData: allData,
      };
    case "SET_INITIAL_STATE":
      return {
        ...state,
        modules: { ...state.modules, pageDisplayed: 0 },
      };

    default:
      return state;
  }
};

export default rootReducer;
