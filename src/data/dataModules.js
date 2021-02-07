import B2AG from "../data/dataB2AG";
import B2HM from "../data/dataB2HM";
import B2NS from "../data/dataB2NS";
import B2TZ from "../data/dataB2TZ";
import B2Phrases from "../data/dataB2Phrases";
import verbsForWriters from "../data/dataVerbsForWriters";

let allWordData = [verbsForWriters, B2AG, B2HM, B2NS, B2TZ, B2Phrases];

export let dataModules = [
  {
    moduleName: "Action Verbs",
    id: 0,
    moduleProgress: 0,
    masteredWords: [],
    unmasteredWords: [],
  },
  {
    moduleName: "B2 Vocab: Part 1",
    id: 1,
    moduleProgress: 0,
    masteredWords: [],
    unmasteredWords: [],
  },
  {
    moduleName: "B2 Vocab: Part 2",
    id: "B2HM",
    moduleProgress: 0,
    masteredWords: [],
    unmasteredWords: [],
  },
  {
    moduleName: "B2 Vocab: Part 3",
    id: "B2NS",
    moduleProgress: 0,
    masteredWords: [],
    unmasteredWords: [],
  },
  {
    moduleName: "B2 Vocab: Part 4",
    id: "B2TZ",
    moduleProgress: 0,
    masteredWords: [],
    unmasteredWords: [],
  },
  {
    moduleName: "B2 Phrases",
    id: "B2Phrases",
    moduleProgress: 0,
    masteredWords: [],
    unmasteredWords: [],
  },
];

export let dataOverall = {
  masteredModules: [],
  unmasteredModules: [],
};

let initialCalculations = () => {
  setUnmasteredWords();
  setUnmasteredModules();
};

let setUnmasteredWords = () => {
  dataModules.forEach((el, index) => {
    let unmasteredWordsCopy = [];
    Object.assign(unmasteredWordsCopy, allWordData[index]);
    el.unmasteredWords = unmasteredWordsCopy;
  });
};

let setUnmasteredModules = () => {
  dataModules.forEach((el) => {
    dataOverall.unmasteredModules.push(el.moduleName);
  });
};

initialCalculations();
