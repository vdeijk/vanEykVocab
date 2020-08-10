import { store } from "../index";
import { activeModuleApp } from "../Module/Content/PageZero.js";
import { activeModuleProgress } from "../Inspect/Progress";
import { verbsForWriters } from "./VerbsForWriters";
import { B2AG } from "./B2AG";
import { B2HM } from "./B2HM";
import { B2NS } from "./B2NS";
import { B2TZ } from "./B2TZ";
import { B2Phrases } from "./B2Phrases";

// Model


function checkModuleMastery(unmasteredWords, activeModuleIndex) {

  let size = Object.keys(unmasteredWords[activeModuleIndex]).length;

  if(size <= 1) {
    
  store.dispatch({
    type: "MODULE_MASTERED",
    activeModuleIndex: activeModuleIndex
  }); 
  return true;
    
  }
  return false;
}

function trackWordProgress(unmasteredWords, activeModuleIndex, randomNumber) {
  const state = store.getState();

  if (state.answeredCorrectly === true) {
    wordData.wordProgress += BASICCONSTANTS.PERCENTAGEPLUSCORRECTANSWER;

    unmasteredWords[activeModuleIndex][randomNumber].progressTracker =
      wordData.wordProgress;
  }
  return wordData.wordProgress.toFixed(1);
}

function calculateModuleProgress(
  unmasteredWords,
  activeModuleIndex,
  allModulesProgress
) {

  let progressOnList = 0;
  let i = 0;
  let numberOfUnmasteredWords = unmasteredWords[activeModuleIndex].length;
  let totalWords = allModulesProgress[activeModuleIndex].totalWords;
  let numerOfMasteredWords = totalWords - numberOfUnmasteredWords;

  for (i = 0; i < numberOfUnmasteredWords; i++) {
    progressOnList += unmasteredWords[activeModuleIndex][i].progressTracker;
  };

  let progressAddition = numerOfMasteredWords * 100;

  let moduleProgressUnfixed =
    (progressOnList / totalWords) + (progressAddition / totalWords);

  let moduleProgress = moduleProgressUnfixed.toFixed(1);

  allModulesProgress[activeModuleIndex].moduleProgress = moduleProgress;

  return moduleProgress;
}

function checkWordMastery(
    allModulesMasteredWords,
    activeModuleIndex,
    unmasteredWords,
    randomNumber,
    allModulesProgress
) {
  if (wordData.wordProgress >= 100) {
    allModulesMasteredWords[activeModuleIndex].push(wordData);
    
    alert(`You have mastered ${wordData.name}`);

    unmasteredWords[activeModuleIndex].splice(randomNumber, 1);
    allModulesProgress[activeModuleIndex].wordMastery +=1;

    return (totalWordMastery += 1);
  } else {
    return totalWordMastery;
  }
}

function generateRandomNumber(unmasteredWords, activeModuleIndex) {
  return Math.floor(
    Math.random() * (unmasteredWords[activeModuleIndex].length - 1)
  );
}

function generateWordData(unmasteredWords, activeModuleIndex, randomNumber) {
  return (wordData = {
    name: unmasteredWords[activeModuleIndex][randomNumber].name,
    wordDefinition:
      unmasteredWords[activeModuleIndex][randomNumber].definitionShort,
    wordExampleOne: unmasteredWords[activeModuleIndex][randomNumber].exampleOne,
    wordExampleTwo: unmasteredWords[activeModuleIndex][randomNumber].exampleTwo,
    wordExampleThree:
      unmasteredWords[activeModuleIndex][randomNumber].exampleThree,
    wordExampleFour:
      unmasteredWords[activeModuleIndex][randomNumber].exampleFour,
    wordProgress:
      unmasteredWords[activeModuleIndex][randomNumber].progressTracker,
  });
}

function calculateTotalOverallWords(allModulesProgress) {
  let i,
    totalOverallWords = 0;
  for (i = 0; i < allModulesProgress.length; i++) {
    totalOverallWords += allModulesProgress[i].totalWords;
  }
  return totalOverallWords;
}

let totalModulesClearedCounter;

function calculateTotalModulesCleared(allModulesProgress) {
  let i;
  totalModulesClearedCounter = 0;
  for (i = 0; i < allModulesProgress.length; i++) {
    if (allModulesProgress[i].mastered === true) {
      totalModulesClearedCounter += 1;
    }
  }
  return totalModulesClearedCounter;
}

//View

var BASICCONSTANTS = {
  PERCENTAGEPLUSCORRECTANSWER: 25,
  TOTALMODULES: 6,
};

function init(activeModuleIndex, allModulesData) {
  const state = store.getState();
  if (state.init[activeModuleIndex] === true) {
    unmasteredWords[activeModuleIndex] = allModulesData[activeModuleIndex];
    store.dispatch({
      type: "SET_INIT",
      activeModuleIndex: activeModuleIndex,
    });
  }
}

function setActiveModule(activeModule) {
  switch (activeModule) {
    case "verbsForWriters":
      return 0;
    case "B2AG":
      return 1;
    case "B2HM":
      return 2;
    case "B2NS":
      return 3;
    case "B2TZ":
      return 4;
    case "B2Phrases":
      return 5;
    default:
      break;
  }
}

function getAllModulesData() {
  return allModulesData;
}

export let allModulesData = [
  verbsForWriters,
  B2AG,
  B2HM,
  B2NS,
  B2TZ,
  B2Phrases,
];

let verbsForWritersUnmastered = [];
let B2AGPUnmastered = [];
let B2HMUnmastered = [];
let B2NSUnmastered = [];
let B2TZUnmastered = [];
let B2PhrasesUnmastered = [];

let unmasteredWords = [
  verbsForWritersUnmastered,
  B2AGPUnmastered,
  B2HMUnmastered,
  B2NSUnmastered,
  B2TZUnmastered,
  B2PhrasesUnmastered
];

let verbsForWritersMastered = [];
let B2AGPMastered = [];
let B2HMMastered = [];
let B2NSmoduleCMastered = [];
let B2TZMastered = [];
let B2PhrasesMastered = [];

let allModulesMasteredWords = [
  verbsForWritersMastered,
  B2AGPMastered,
  B2HMMastered,
  B2NSmoduleCMastered,
  B2TZMastered,
  B2PhrasesMastered,
];

function getAllModulesProgress() {
  return allModulesProgress;
}

let verbsForWritersProgress;
let B2AGProgress;
let B2HMProgress;
let B2NSProgress;
let B2TZProgress;
let B2PhrasesProgress;

export let allModulesProgress = [
  (verbsForWritersProgress = {
    moduleName: "Action Verbs",
    id: "verbsForWriters",
    wordMastery: 0,
    moduleProgress: 0,
    totalWords: 20,
    mastered: false,
  }),

  (B2AGProgress = {
    moduleName: "B2 Vocab: Part 1",
    id: "B2AG",
    wordMastery: 0,
    moduleProgress: 0,
    totalWords: 13,
    mastered: false,
  }),

  (B2HMProgress = {
    moduleName: "B2 Vocab: Part 2",
    id: "B2HM",
    wordMastery: 0,
    moduleProgress: 0,
    totalWords: 22,
    mastered: false,
  }),

  (B2NSProgress = {
    moduleName: "B2 Vocab: Part 3",
    id: "B2NS",
    wordMastery: 0,
    moduleProgress: 0,
    totalWords: 22,
    mastered: false,
  }),

  (B2TZProgress = {
    moduleName: "B2 Vocab: Part 4",
    id: "B2TZ",
    wordMastery: 0,
    moduleProgress: 0,
    totalWords: 22,
    mastered: false,
  }),

  (B2PhrasesProgress = {
    moduleName: "B2 Phrases",
    id: "B2Phrases",
    wordMastery: 0,
    moduleProgress: 0,
    totalWords: 21,
    mastered: false,
  }),
];

function setwordData() {
  wordData = {
    name: ``,
    wordDefinition: ``,
    wordExampleOne: ``,
    wordExampleTwo: ``,
    wordExampleThree: ``,
    wordExampleFour: ``,
    wordProgress: 0,
  };
}

export let wordData = {
  name: ``,
  wordDefinition: ``,
  wordExampleOne: ``,
  wordExampleTwo: ``,
  wordExampleThree: ``,
  wordExampleFour: ``,
  wordProgress: 0,
};

function updateProgressTracker(
  moduleProgress,
  activeModuleIndex,
  allModulesProgress
) {
  store.dispatch({
    type: "PROGRESS_TRACKER_UPDATED",
    wordProgress: wordData.wordProgress,
    moduleProgress: moduleProgress,
    moduleName: allModulesProgress[activeModuleIndex].moduleName,
  });
}

function updateOverallStatistics(
  totalModulesCleared,
  totalOverallWords,
  totalWordMastery
) {
  return {
    totalModules: BASICCONSTANTS.TOTALMODULES,
    totalModulesCleared: totalModulesCleared,
    totalOverallWords: totalOverallWords,
    totalWordMastery: totalWordMastery,
  };
}

export let overallStatistics;

function updateProgressCalculations(
  allModulesProgress,
  activeModuleIndex,
  allModulesMasteredWords,
  unmasteredWords
) {
  return {
    currentModuleName: allModulesProgress[activeModuleIndex].moduleName,
    currentModuleMastered: allModulesMasteredWords[activeModuleIndex],
    wordMastery: allModulesProgress[activeModuleIndex].wordMastery,
    totalWords: allModulesProgress[activeModuleIndex].totalWords,
    currentModule: unmasteredWords[activeModuleIndex],
  };
}

export let progressCalculationsObject;


//Controller

let randomNumber = 0;
let totalWordMastery = 0;

export function appCalculations() {
  let activeModuleIndex = setActiveModule(activeModuleApp);
  let allModulesData = getAllModulesData();
  init(activeModuleIndex, allModulesData);

  trackWordProgress(unmasteredWords, activeModuleIndex, randomNumber);
  allModulesProgress = getAllModulesProgress();
  let moduleProgress = calculateModuleProgress(
    unmasteredWords,
    activeModuleIndex,
    allModulesProgress
  );
  totalWordMastery = checkWordMastery(
    allModulesMasteredWords,
    activeModuleIndex,
    unmasteredWords,
    randomNumber,
    allModulesProgress
  );
  checkModuleMastery(unmasteredWords, activeModuleIndex);
  setwordData();
  randomNumber = generateRandomNumber(allModulesData, activeModuleIndex);
  generateWordData(unmasteredWords, activeModuleIndex, randomNumber);
  updateProgressTracker(moduleProgress, activeModuleIndex, allModulesProgress);
}


export function appMasteredCalculations() {
  let activeModuleIndex = setActiveModule(activeModuleApp);
  allModulesProgress[activeModuleIndex].moduleProgress = 100;
  allModulesProgress[activeModuleIndex].moduleProgress = 100;
  totalWordMastery += 1;
  allModulesProgress[activeModuleIndex].mastered = true;
  allModulesProgress[activeModuleIndex].wordMastery +=1;
  allModulesMasteredWords[activeModuleIndex].push(unmasteredWords[activeModuleIndex][0]);
  unmasteredWords[activeModuleIndex] = [];

  store.dispatch({
    type: "RESET_MODULE_MASTERED"
  });
}

export function dashboardCalculations() {
  allModulesProgress = getAllModulesProgress();
  let totalOverallWords = calculateTotalOverallWords(allModulesProgress);
  let totalModulesCleared = calculateTotalModulesCleared(allModulesProgress);
  overallStatistics = updateOverallStatistics(
    totalModulesCleared,
    totalOverallWords,
    totalWordMastery
  );
}

export function progressCalculations() {
  let activeModuleIndex = setActiveModule(activeModuleProgress);
  allModulesProgress = getAllModulesProgress();
  progressCalculationsObject = updateProgressCalculations(
    allModulesProgress,
  activeModuleIndex,
  allModulesMasteredWords,
  unmasteredWords
  );
}

