import { dataModules } from "../data/dataModules";
import { dataOverall } from "../data/dataModules";
import {
  answeredCorrectly,
  wordProgress,
  moduleProgress,
} from "../components/pages/AppModules";

export let moduleMastered = false;
export let wordDataCalc = {};
export let moduleDataCalc = {};

let activeModule;
let randomNumber;

export let setInitialData = (id) => {
  activeModule = dataModules[id];
};

export let setData = () => {
  randomNumber = generateRandomNumber(activeModule);
  wordDataCalc = generateWordData(activeModule, randomNumber);
  moduleDataCalc = generateModuleData(activeModule);
};

export let saveData = (id, initialRound) => {
  if (answeredCorrectly) {
    saveWordData(activeModule, randomNumber, wordProgress);
    saveModuleData(activeModule, moduleProgress, initialRound);
    checkWordMastery(wordProgress, activeModule, wordDataCalc, randomNumber);
    moduleMastered = checkModuleMastery(activeModule, dataOverall, id);
  }
};

//setData

let generateRandomNumber = (activeModule) => {
  return Math.floor(Math.random() * (activeModule.unmasteredWords.length - 1));
};

let generateWordData = (activeModule, randomNumber) => {
  let wordData = activeModule.unmasteredWords[randomNumber];
  return {
    name: wordData.name,
    nameLowerCase: wordData.name.toLowerCase(),
    wordDefinition: wordData.definitionShort,
    wordExampleOne: wordData.exampleOne,
    wordExampleTwo: wordData.exampleTwo,
    wordExampleThree: wordData.exampleThree,
    wordExampleFour: wordData.exampleFour,
    wordProgress: wordData.progressTracker,
  };
};

let generateModuleData = (activeModule) => {
  return {
    name: activeModule.moduleName,
    progress: activeModule.moduleProgress,
    totalWords: activeModule.totalWords,
  };
};

//saveData

let saveWordData = (activeModule, randomNumber, wordProgress) => {
  if (wordProgress >= 100) {
    wordProgress = 100;
    dataOverall.totalWordMastery += 1;
  }
  activeModule.unmasteredWords[randomNumber].progressTracker = wordProgress;
};

let saveModuleData = (activeModule, moduleProgress, initialRound) => {
  if (moduleProgress >= 100) {
    moduleProgress = 100;
  }
  if (!initialRound) activeModule.moduleProgress = moduleProgress;
};

let checkWordMastery = (
  wordProgress,
  activeModule,
  wordDataCalc,
  randomNumber
) => {
  if (wordProgress >= 100) {
    activeModule.masteredWords.push(wordDataCalc.name);
    activeModule.unmasteredWords.splice(randomNumber, 1);
    activeModule.wordMastery += 1;
  }
};

let checkModuleMastery = (activeModule, dataOverall, id) => {
  if (activeModule.unmasteredWords.length < 1) {
    activeModule.mastered = true;
    dataOverall.totalModulesCleared += 1;
    dataOverall.unmasteredModules.push();
    dataOverall.unmasteredModules.splice(id, 1);
    return true;
  } else {
    return false;
  }
};
