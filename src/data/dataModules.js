import B2AG from "../data/dataB2AG";
import B2HM from "../data/dataB2HM";
import B2NS from "../data/dataB2NS";
import B2TZ from "../data/dataB2TZ";
import B2Phrases from "../data/dataB2Phrases";
import verbsForWriters from "../data/dataVerbsForWriters";

let allWordData = [verbsForWriters, B2AG, B2HM, B2NS, B2TZ, B2Phrases];
let overallWords = 0;

let verbsForWritersProgress,
  B2AGProgress,
  B2HMProgress,
  B2NSProgress,
  B2TZProgress,
  B2PhrasesProgress;

export let dataModules = [
  (verbsForWritersProgress = {
    moduleName: "Action Verbs",
    id: 0,
    wordMastery: 0,
    moduleProgress: 0,
    totalWords: 20,
    mastered: false,
    masteredWords: [],
    unmasteredWords: [],
  }),
  (B2AGProgress = {
    moduleName: "B2 Vocab: Part 1",
    id: 1,
    wordMastery: 0,
    moduleProgress: 0,
    totalWords: 13,
    mastered: false,
    masteredWords: [],
    unmasteredWords: [],
  }),
  (B2HMProgress = {
    moduleName: "B2 Vocab: Part 2",
    id: "B2HM",
    wordMastery: 0,
    moduleProgress: 0,
    totalWords: 22,
    mastered: false,
    masteredWords: [],
    unmasteredWords: [],
  }),
  (B2NSProgress = {
    moduleName: "B2 Vocab: Part 3",
    id: "B2NS",
    wordMastery: 0,
    moduleProgress: 0,
    totalWords: 22,
    mastered: false,
    masteredWords: [],
    unmasteredWords: [],
  }),
  (B2TZProgress = {
    moduleName: "B2 Vocab: Part 4",
    id: "B2TZ",
    wordMastery: 0,
    moduleProgress: 0,
    totalWords: 21,
    mastered: false,
    masteredWords: [],
    unmasteredWords: [],
  }),
  (B2PhrasesProgress = {
    moduleName: "B2 Phrases",
    id: "B2Phrases",
    wordMastery: 0,
    moduleProgress: 0,
    totalWords: 19,
    mastered: false,
    masteredWords: [],
    unmasteredWords: [],
  }),
];

export let dataOverall = {
  totalModules: dataModules.length,
  totalModulesCleared: 0,
  totalOverallWords: 0,
  totalWordMastery: 0,
  masteredModules: [],
  unmasteredModules: [],
};

let initialCalculations = () => {
  setUnmasteredWords();
  calculateOverallWords();
  setUnmasteredModules();
};

let setUnmasteredWords = () => {
  dataModules.forEach((el, index) => {
    let unmasteredWordsCopy = [];
    Object.assign(unmasteredWordsCopy, allWordData[index]);
    el.unmasteredWords = unmasteredWordsCopy;
  });
};

let calculateOverallWords = () => {
  let dataModulesCopy = [];
  Object.assign(dataModulesCopy, dataModules);

  dataModulesCopy.forEach((el) => {
    overallWords += el.totalWords;
  });
  dataOverall.totalOverallWords = overallWords;
};

let setUnmasteredModules = () => {
  dataModules.forEach((el) => {
    dataOverall.unmasteredModules.push(el.moduleName);
  });
};

initialCalculations();
