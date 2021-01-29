import React, { useContext, useReducer } from "react";
import reducer from "./reducer";

export const initialState = {
  modules: {
    initialRound: true,
    mastered: false,
    answeredCorrectly: false,
    pageDisplayed: 0,
    showPopup: false,
    inputValue: ``,
    inputCounter: 0,
    redirect: false,
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
  wordData: {},
  moduleData: {},
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setInitialRound = () => {
    dispatch({ type: "SET_INITIAL_ROUND" });
  };

  const setDataState = (wordData, moduleData) => {
    dispatch({
      type: "SET_DATA_STATE",
      payloadWords: wordData,
      payloadModule: moduleData,
    });
  };

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

  const setRedirect = () => {
    dispatch({ type: "SET_REDIRECT" });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        setInitialRound,
        togglePopup,
        handleInput,
        handleSubmit,
        clearInput,
        handleProgress,
        counterUpdate,
        setDataState,
        setRedirect,
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
