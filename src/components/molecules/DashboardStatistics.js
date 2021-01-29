import React from "react";
import { dataOverall } from "../../data/dataModules";

const DashboardStatistics = () => {
  const {
    totalModules,
    totalModulesCleared,
    totalOverallWords,
    totalWordMastery,
  } = dataOverall;

  return (
    <>
      <div className="sidebar__heading">
        <h3>Your statistics</h3>
      </div>
      <div className="statistics">
        <div className="statistics__container-one">
          <p className="statistics-p">Words mastered:</p>
          <div className="statistics__container-two">
            <p className="statistics-p">
              {totalWordMastery}/{totalOverallWords}
            </p>
            &nbsp;&nbsp;
            <progress
              max={totalOverallWords}
              value={totalWordMastery}
              className="statistics__progress_bar"
            ></progress>
          </div>
        </div>

        <div className="statistics__container-one">
          <p className="statistics-p">Modules mastered:</p>
          <div className="statistics__container-two">
            <p className="statistics-p">
              {totalModulesCleared}/{totalModules}
            </p>
            &nbsp;&nbsp;
            <progress
              max={totalModules}
              value={totalModulesCleared}
              className="statistics__progress_bar"
            ></progress>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardStatistics;
