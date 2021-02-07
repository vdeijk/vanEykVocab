import { dataModules } from "../data/dataModules";
import { dataOverall } from "../data/dataModules";

let activeModule;
let randomNumber;
const WORDPROGRESSCONST = 50;

export let setData = (id) => {
  activeModule = dataModules[id];
  randomNumber = generateRandomNumber(activeModule);
  let wordData = generateWordData(activeModule, randomNumber);
  let moduleData = generateModuleData(activeModule);

  return {
    wordData: wordData,
    moduleData: moduleData,
  };
};

export let saveData = (answeredCorrectly, id) => {
  let wordProgressTemp =
    activeModule.unmasteredWords[randomNumber].progressTracker;
  let wordProgress = saveWordData(answeredCorrectly, wordProgressTemp);
  let moduleProgress = activeModule.moduleProgress;
  saveModuleData(answeredCorrectly, moduleProgress);
  checkWordMastery(wordProgress, activeModule, randomNumber);
  let moduleMastery = checkModuleMastery(activeModule, dataOverall, id);

  return moduleMastery;
};

export let calculateDashboardStats = () => {
  let dataModulesCopy = [];
  Object.assign(dataModulesCopy, dataModules);
  let totalModules = dataModules.length;
  let totalWords = calculateTotalWords(dataModulesCopy);
  let modulesCleared = calculateModulesCleared(dataModulesCopy);
  let wordMastery = calculateWordMastery(dataModulesCopy);

  return {
    totalModules: totalModules,
    totalWords: totalWords,
    modulesCleared: modulesCleared,
    wordMastery: wordMastery,
    dataModules: dataModules,
  };
};

export let calculateModuleStats = (id) => {
  activeModule = dataModules[id];
  let totalWords =
    activeModule.masteredWords.length + activeModule.unmasteredWords.length;
  let wordMastery = activeModule.masteredWords.length;

  return {
    totalWords: totalWords,
    wordMastery: wordMastery,
    activeModule: activeModule,
  };
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

let saveWordData = (answeredCorrectly, wordProgressTemp) => {
  if (!answeredCorrectly) wordProgressTemp = 0;
  else if (wordProgressTemp <= 100 - WORDPROGRESSCONST) {
    wordProgressTemp += WORDPROGRESSCONST;
    activeModule.unmasteredWords[
      randomNumber
    ].progressTracker = wordProgressTemp;
  } else wordProgressTemp = 100;
  return wordProgressTemp;
};

let saveModuleData = (answeredCorrectly, moduleProgress) => {
  let totalWords =
    activeModule.unmasteredWords.length + activeModule.masteredWords.length;
  if (answeredCorrectly) moduleProgress += WORDPROGRESSCONST / totalWords;
  if (moduleProgress >= 100) moduleProgress = 100;
  activeModule.moduleProgress = moduleProgress;
};

let checkWordMastery = (wordProgress, activeModule, randomNumber) => {
  if (wordProgress >= 100) {
    const masteredItem = activeModule.unmasteredWords.splice(randomNumber, 1);
    const masteredItemFinal = masteredItem[0];
    activeModule.masteredWords.push(masteredItemFinal);
    return true;
  } else {
    return false;
  }
};

let checkModuleMastery = (activeModule, dataOverall, id) => {
  if (activeModule.unmasteredWords.length < 1) {
    dataOverall.totalModulesCleared += 1;
    dataOverall.unmasteredModules.push();
    dataOverall.unmasteredModules.splice(id, 1);
    return true;
  } else {
    return false;
  }
};

//calculateOverallStats

let calculateTotalWords = (dataModulesCopy) => {
  let totalWords = 0;
  dataModulesCopy.forEach((el) => {
    totalWords += el.masteredWords.length + el.unmasteredWords.length;
  });
  return totalWords;
};

let calculateModulesCleared = (dataModulesCopy) => {
  let modulesCleared = 0;
  dataModulesCopy.forEach((el) => {
    if (el.unmasteredWords.length < 1) modulesCleared += 1;
  });
  return modulesCleared;
};

let calculateWordMastery = (dataModulesCopy) => {
  let wordMastery = 0;
  dataModulesCopy.forEach((el) => {
    wordMastery += el.masteredWords.length;
  });
  return wordMastery;
};
