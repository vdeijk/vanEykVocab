import React from "react";

const DashboardStatistics = (props) => {
  const {
    wordMastery,
    totalWords,
    modulesCleared,
    totalModules,
  } = props.overallStats;

  return (
    <div className="statistics">
      <h3>Your statistics</h3>
      <div>
        <p>
          Words mastered: {wordMastery}/{totalWords}
        </p>
        <progress max={totalWords} value={wordMastery} />
      </div>
      <div>
        <p>
          Modules mastered: {modulesCleared}/{totalModules}
        </p>
        <progress max={totalModules} value={modulesCleared} />
      </div>
    </div>
  );
};

export default DashboardStatistics;
