import React from "react";

const DashboardProgressColumn = (props) => {
  const { leftColumn, rightColumn } = props.words;
  return (
    <div className="progress-page">
      <div className="progress-page__left-column">{leftColumn}</div>
      <div className="progress-page__right-column">{rightColumn}</div>
    </div>
  );
};

export default DashboardProgressColumn;
