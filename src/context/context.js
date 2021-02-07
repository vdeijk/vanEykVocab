import React, { useContext, useReducer } from "react";
import reducer from "./reducer";

export const initialState = {
  modules: {
    answeredCorrectly: false,
    pageDisplayed: 0,
    showPopup: false,
    inputValue: "",
    inputCounter: 0,
    redirect: false,
    moduleMastery: false,
  },
  buttonValues: [
    "Continue",
    "",
    "Continue",
    "Continue",
    "Continue",
    "Continue",
    "Continue",
    "Continue",
  ],
  allData: {
    wordData: {
      wordProgress: 0,
    },
    moduleData: {
      name: "",
      progress: 0,
    },
  },
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleProgress = (e) => {
    dispatch({ type: "HANDLE_PROGRESS", payload: e.target.name });
  };

  const handleSubmit = (e) => {
    dispatch({ type: "HANDLE_SUBMIT", payload: e.target.name });
  };

  const togglePopup = () => {
    dispatch({ type: "SET_SHOW_POPUP", payload: !state.modules.showPopup });
  };

  const handleInput = (e) => {
    dispatch({ type: "HANDLE_INPUT", payload: e.target.value });
  };

  const clearInput = () => {
    dispatch({
      type: "CLEAR_INPUT",
    });
  };
  const counterUpdate = () => {
    dispatch({ type: "COUNTER_UPDATE" });
  };

  const setMastery = (masteryTemp) => {
    dispatch({ type: "SET_MASTERY", payload: masteryTemp });
  };

  const setAllData = (allDataTemp) => {
    dispatch({ type: "SET_ALLDATA", payload: allDataTemp });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        togglePopup,
        handleInput,
        handleSubmit,
        clearInput,
        handleProgress,
        counterUpdate,
        setMastery,
        setAllData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useGlobalContext };
