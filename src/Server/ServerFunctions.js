import { store } from "../index";
import { activeModule } from "../Module/QuestionBox.js";

import * as ServerData from "./ServerData";

let randomNumber;
let progressOnList;
let wordProgress = 0;
let wordMastery = [0, 0];
let moduleProgress = 0;
let activeModuleIndex;
let currentWord;
let totalModulesCleared = 0;

export let wordData = {};

export function setActiveModule() {
  switch (activeModule) {
    case "verbsForWriters":
      activeModuleIndex = 0;
      outputGenerator();
      break;
    case "moduleA":
      activeModuleIndex = 1;
      outputGenerator();
      break;
    default:
      break;
  }
}

function outputGenerator() {
  randomNumber = Math.floor(
    Math.random() * (ServerData.allModules[activeModuleIndex].length - 1)
  );
  wordData.wordName =
    ServerData.allModules[activeModuleIndex][randomNumber].name;
  wordData.wordDefinition =
    ServerData.allModules[activeModuleIndex][randomNumber].definition;
  wordData.wordProgress =
    ServerData.allModules[activeModuleIndex][randomNumber].progressTracker;
  progressTracker();
}

export function progressTracker() {
  const state = store.getState();
  currentWord = ServerData.allModules[activeModuleIndex][randomNumber];

  if (state.answeredCorrectly) {
    currentWord.progressTracker += ServerData.PERCENTAGEPLUSCORRECTANSWER;
  }

  wordProgress = currentWord.progressTracker;

  checkWordMastery();
}

function checkWordMastery() {
  if (currentWord.progressTracker >= 100) {
    let wordComplete = ServerData.allModules[activeModuleIndex];
    let tempStorage = wordComplete.splice(randomNumber, 1);
    let masteredWord = tempStorage[0];

    ServerData.allModulesMasteredWords[activeModuleIndex].push(masteredWord);
    alert("You have mastered this word");
    wordMastery[activeModuleIndex] += 1;
  }
  calculateModuleProgress();
}

function calculateModuleProgress() {
  progressOnList = 0;
  for (let i = 0; i < ServerData.allModules[activeModuleIndex].length; i++) {
    progressOnList +=
      ServerData.allModules[activeModuleIndex][i].progressTracker;
  }

  moduleProgress =
    progressOnList /
    ServerData.allModulesProgress[activeModuleIndex].totalWords;
  let progressAddition =
    ServerData.allModulesProgress[activeModuleIndex].totalWords -
    ServerData.allModules[activeModuleIndex].length;
  moduleProgress +=
    (progressAddition * 100) /
    ServerData.allModulesProgress[activeModuleIndex].totalWords;

  switch (activeModuleIndex) {
    case 0:
      ServerData.allModulesProgress[0].wordMastery = wordMastery;
      ServerData.allModulesProgress[0].moduleProgress = moduleProgress;
      break;
    case 1:
      ServerData.allModulesProgress[1].wordMastery = wordMastery;
      ServerData.allModulesProgress[1].moduleProgress = moduleProgress;
      break;
    default:
      break;
  }

  store.dispatch({
    type: "PROGRESS_TRACKER_UPDATED",
    wordProgress: wordProgress,
    wordMasteryVFW: wordMastery[0],
    wordMasteryA: wordMastery[1],
    moduleProgress: moduleProgress,
    verbsForWritersMastered: ServerData.allModulesMasteredWords[0],
    moduleAMastered: ServerData.allModulesMasteredWords[1],
  });
  checkMastery();
}

function checkMastery() {
  if (
    wordMastery[activeModuleIndex] >=
    ServerData.allModulesProgress[activeModuleIndex].totalWords
  ) {
    ServerData.modulesMastered[activeModuleIndex] = true;
    totalModulesCleared += 1;

    store.dispatch({
      type: "LIST_MASTERY",
      moduleMastery: {
        moduleA: ServerData.modulesMastered[0],
        verbsForWriters: ServerData.modulesMastered[1],
      },
    });
  }
}

export function loadWordList() {
  store.dispatch({
    type: "LOAD_WORD_LIST",
    verbsForWriters: ServerData.verbsForWriters,
    moduleA: ServerData.moduleA,
    verbsForWritersMastered: ServerData.verbsForWritersMastered,
    moduleAMastered: ServerData.moduleAMastered,
  });
}

export function loadOverallStatistics() {
  store.dispatch({
    type: "LOAD_OVERALL_STATISTICS",
    overallStats: {
      totalModules: ServerData.TOTALMODULES,
      totalModulesCleared: totalModulesCleared,
      totalOverallWords: ServerData.TOTALOVERALLWORDS,
      totalOverallWordsCleared: wordMastery[0] + wordMastery[1],
    },
    totalWords: {
      totalWordsVFW: ServerData.allModulesProgress[0].totalWords,
      totalWordsA: ServerData.allModulesProgress[1].totalWords,
    },
  });
}
