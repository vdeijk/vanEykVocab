import { submitValue } from "../Module/QuestionBox";

let buttonValues = [
  "See answer",
  "Next page",
  "",
  "Next page",
  "I have my own definition",
  "My pronunciation is great",
  "I have made up a few",
  "Next question",
  "Next question",
  "Back to dashboard",
];

const initialState = {
  moduleStats: {
    wordProgress: 0,
    moduleProgress: 0,
    wordMasteryVFW: 0,
    wordMasteryA: 0,
  },
  verbsForWriters: [],
  moduleA: [],
  moduleAMastered: [],
  verbsForWritersMastered: [],
  totalWords: {},
  pageDisplayed: 0,
  buttonValue: buttonValues[0],
  answeredCorrectly: false,
  overallStats: {},
  moduleMastery: {
    moduleA: false,
    verbsForWriters: false,
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "HANDLE_SUBMIT":
      if (submitValue === 2) {
        return {
          ...state,
          pageDisplayed: 3,
          buttonValue: buttonValues[3],
          answeredCorrectly: false,
        };
      } else if (submitValue <= 6) {
        return {
          ...state,
          pageDisplayed: submitValue + 1,
          buttonValue: buttonValues[submitValue + 1],
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
        pageDisplayed: 8,
        buttonValue: buttonValues[8],
        answeredCorrectly: true,
      };
    case "PROGRESS_TRACKER_UPDATED":
      return {
        ...state,
        moduleStats: {
          wordProgress: action.wordProgress,
          moduleProgress: action.moduleProgress,
          wordMasteryVFW: action.wordMasteryVFW,
          wordMasteryA: action.wordMasteryA,
        },
        answeredCorrectly: false,
        moduleAMastered: action.moduleAMastered,
        verbsForWritersMastered: action.verbsForWritersMastered,
      };
    case "INIT":
      return {
        ...state,
        pageDisplayed: 0,
        buttonValue: buttonValues[0],
        totalWords: action.totalWords,
      };
    case "LOAD_WORD_LIST":
      return {
        ...state,
        verbsForWriters: action.verbsForWriters,
        moduleA: action.moduleA,
      };
    case "WORD_PROGRESS_NEXT_WORD":
      return {
        ...state,
        moduleStats: {
          wordProgress: action.wordProgress,
        },
      };
    case "LOAD_OVERALL_STATISTICS":
      return {
        ...state,
        overallStats: {
          totalModules: action.overallStats.totalModules,
          totalModulesCleared: action.overallStats.totalModulesCleared,
          totalOverallWords: action.overallStats.totalOverallWords,
          totalOverallWordsCleared:
            action.overallStats.totalOverallWordsCleared,
        },
        totalWords: {
          totalWordsVFW: action.totalWords.totalWordsVFW,
          totalWordsA: action.totalWords.totalWordsA,
        },
      };
    case "SET_INITIAL_STATE":
      return {
        ...state,
        pageDisplayed: 0,
        answeredCorrectly: false,
      };
    case "LIST_MASTERY":
      return {
        ...state,
        moduleMastery: {
          moduleA: action.moduleA,
          verbsForWriters: action.verbsForWriters,
        },
        pageDisplayed: 9,
        buttonValue: buttonValues[9],
      };
  }
  return state;
};

export default rootReducer;
