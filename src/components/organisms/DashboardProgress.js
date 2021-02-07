import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { calculateModuleStats } from "../../calculations/calculations";
import DashboardProgressColumn from "../molecules/DashboardProgressColumn";

const DashboardProgress = () => {
  const [moduleStats, setModuleStats] = useState({
    totalWords: 0,
    wordMastery: 0,
  });

  const [activeModule, setActiveModule] = useState({
    unmasteredWords: [],
    masteredWords: [],
  });

  useEffect(() => {
    fetchData();
  }, []);

  const { id } = useParams();

  const fetchData = async () => {
    const moduleStatsTemp = await calculateModuleStats(id);
    setModuleStats(moduleStatsTemp);
    setActiveModule(moduleStatsTemp.activeModule);
  };

  const listWords = (element) => {
    return element.map((el, index) => {
      return (
        <div className="progress-page__item" key={index}>
          <p> Word {(index += 1)} -</p>&nbsp;
          <p>
            {el.name}: &nbsp;
            {el.progressTracker}%
          </p>
        </div>
      );
    });
  };

  const unmasteredWords = listWords(activeModule.unmasteredWords);
  const masteredWords = listWords(activeModule.masteredWords);

  const splitWords = (el) => {
    let result = {};
    result.leftColumn = el.slice(0, el.length / 2);
    result.rightColumn = el.slice(el.length / 2, el.length);
    return result;
  };

  const unmasteredWordsSplit = splitWords(unmasteredWords);
  const masteredWordsSplit = splitWords(masteredWords);

  return (
    <div>
      <h2>
        Words currently learning (
        {moduleStats.totalWords - moduleStats.wordMastery}/
        {moduleStats.totalWords})
      </h2>
      <DashboardProgressColumn words={unmasteredWordsSplit} />
      <h2>
        Words Mastered ({moduleStats.wordMastery}/{moduleStats.totalWords})
      </h2>
      <DashboardProgressColumn words={masteredWordsSplit} />
    </div>
  );
};

export default DashboardProgress;
