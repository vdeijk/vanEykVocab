let buttonValues = [
  "See answer",
  "",
  "Next page",
  "I have a definition",
  "I have a few examples",
  "Next question",
  "Next question",
  "Back to dashboard",
];

const initialState = {
  moduleStats: {
    wordProgress: 0,
    moduleProgress: 0,
    wordMastery: 0,
    totalWords: 0,
    moduleName: "",
  },
  init: [true, true, true, true, true, true],
  appInputValue: ``,
  appCounter: 0,
  answeredCorrectly: false,
  pageDisplayed: 0,
  buttonValue: buttonValues[0],
  overallStats: {},
  moduleMastery: [false, false, false, false, false, false],
  currentModuleMastered: false
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_INIT":
      let initArray = state.init;
      initArray.splice(action.activeModuleIndex, 1, "false");
      return {
        ...state,
        init: initArray,
      };
    case "MODULE_MASTERED":
      let moduleMastery = state.moduleMastery;
      moduleMastery.splice(action.activeModuleIndex, 1, "true");
      return {
        ...state,
        currentModuleMastered: true
      };
      case "RESET_MODULE_MASTERED":
        return {
          ...state,
          currentModuleMastered: false
        };
    case "HANDLE_SUBMIT":
      if (state.pageDisplayed <= 4) {
        return {
          ...state,
          pageDisplayed: (state.pageDisplayed += 1),
          buttonValue: buttonValues[state.pageDisplayed],
        };
      } else {
        return {
          ...state,
          pageDisplayed: 0,
          buttonValue: buttonValues[0],
        };
      }
    case "ANSWERED_CORRECTLY":
      return {
        ...state,
        pageDisplayed: 6,
        buttonValue: buttonValues[6],
        answeredCorrectly: true,
      };
    case "PROGRESS_TRACKER_UPDATED":
      return {
        ...state,
        answeredCorrectly: false,
        moduleStats: {
          wordProgress: action.wordProgress,
          moduleProgress: action.moduleProgress,
          wordMastery: action.wordMastery,
          totalWords: action.totalWords,
          moduleName: action.moduleName,
        },
      };
    case "WORD_PROGRESS_NEXT_WORD":
      return {
        ...state,
        moduleStats: {
          wordProgress: action.wordProgress,
        },
      };
    case "SET_INITIAL_STATE":
      return {
        ...state,
        pageDisplayed: 0,
        answeredCorrectly: false,
        buttonValue: buttonValues[0],
        appInputValue: ``,
        appCounter: 0,
      };
    case "HANDLE_INPUT":
      return {
        ...state,
        appInputValue: action.value,
      };
    case "COUNTER_UPDATE":
      return {
        ...state,
        appCounter: (state.appCounter += 1),
      };
    case "LIST_MASTERY":
      return {
        ...state,
        moduleMastery: {
          moduleA: action.moduleA,
          verbsForWriters: action.verbsForWriters,
        },
        pageDisplayed: 7,
        buttonValue: buttonValues[7],
      };

    default:
      return state;
  }
};

export default rootReducer;
