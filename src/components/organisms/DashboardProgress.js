import React from "react";
import { useParams } from "react-router-dom";
import { dataModules } from "../../data/dataModules";

const DashboardProgress = () => {
  const { id } = useParams();
  const activeModule = dataModules[id];
  const { totalWords, wordMastery } = activeModule;

  const listWords = (element) => {
    return element.map((el, index) => {
      return (
        <div className="progress-page__button" key={index}>
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
    let result = [];
    result[0] = el.slice(0, el.length / 2);
    result[1] = el.slice(el.length / 2, el.length);
    return result;
  };

  const unmasteredWordsSplit = splitWords(unmasteredWords);
  const masteredWordsSplit = splitWords(masteredWords);

  return (
    <div>
      <h1>
        Words currently learning ({totalWords - wordMastery}/{totalWords})
      </h1>
      <div className="progress-page">
        <div className="progress-page__left-column">
          {unmasteredWordsSplit[0]}
        </div>
        <div className="progress-page__right-column">
          {unmasteredWordsSplit[1]}
        </div>
      </div>
      <h1>
        Words Mastered ({wordMastery}/{totalWords})
      </h1>
      <div className="progress-page">
        <div className="progress-page__left-column">
          {masteredWordsSplit[0]}
        </div>
        <div className="progress-page__right-column">
          {masteredWordsSplit[1]}
        </div>
      </div>
    </div>
  );
};

export default DashboardProgress;
