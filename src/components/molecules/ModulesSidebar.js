import React from "react";

const ModulesSidebar = (props) => {
  const { moduleData, wordData } = props.allData;

  return (
    <div className="sidebar">
      <h3>{moduleData.name}</h3>
      <div>
        <p>Progress on this word: {wordData.wordProgress} %</p>
        &nbsp;&nbsp;
        <progress max="100" value={wordData.wordProgress} />
      </div>
      <div>
        <p>Progress on this module: {Math.round(moduleData.progress)} %</p>
        &nbsp;&nbsp;
        <progress max="100" value={Math.round(moduleData.progress)} />
      </div>
    </div>
  );
};

export default ModulesSidebar;
