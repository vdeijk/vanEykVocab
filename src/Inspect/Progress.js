import React, { Component } from "react";
import { progressCalculations } from "../Server/ServerFunctions";
import { progressCalculationsObject } from "../Server/ServerFunctions";

export let activeModuleProgress;

class Progress extends Component {
  state = {
    progressCalculationsObject: {},
  };

  constructor(props) {
    super(props);
    activeModuleProgress = this.props.match.params.id;
    progressCalculations();
  }

  componentDidMount() {
    this.setState({ progressCalculationsObject: progressCalculationsObject })}

  render() {
    //Words learning
    let i = 0;
    let progressItems;

    progressItems = progressCalculationsObject.currentModule.map(
      (counter) => {
        let name = progressCalculationsObject.currentModule[i].name;
        let progressTracker =
          progressCalculationsObject.currentModule[i].progressTracker;
        return (
          <div className="progress_page-button " key={i}>
            <p className="p_progress-one"> Word {(i += 1)} -</p>&nbsp;
            <p>
              {name}: &nbsp;
              {progressTracker}%
            </p>
          </div>
        );
      }
    );

    var firstHalf = progressItems.slice(0, progressItems.length / 2);
    var secondHalf = progressItems.slice(
      progressItems.length / 2,
      progressItems.length
    );

    //Words mastered

    let j = 0;
    const masteredItems = progressCalculationsObject.currentModuleMastered.map(
      (counter) => {
        let name = progressCalculationsObject.currentModuleMastered[j].name;
        let progressTracker = "100";
        return (
          <div className="progress_page-button " key={j}>
            <p className="p_progress-one"> Word {(j += 1)} -</p>&nbsp;
            <p>
              {name}: &nbsp;
              {progressTracker}%
            </p>
          </div>
        );
      }
    );

    var firstHalfMastered = masteredItems.slice(0, masteredItems.length / 2);
    var secondHalfMastered = masteredItems.slice(
      masteredItems.length / 2,
      masteredItems.length
    );

    return (
      <div>
        <h1 className="h1_progress">
          Words currently learning (
          {progressCalculationsObject.totalWords -
            progressCalculationsObject.wordMastery}
          /{progressCalculationsObject.totalWords})
        </h1>
        <div className="progress_page-container ">
          <div className="progress_left-column">{firstHalf}</div>
          <div className="progress_right-column">{secondHalf}</div>
        </div>
        <h1 className="h1_progress">
          Words Mastered ({progressCalculationsObject.wordMastery}/
          {progressCalculationsObject.totalWords})
        </h1>
        <div className="progress_page-container ">
          <div className="progress_left-column">{firstHalfMastered}</div>
          <div className="progress_right-column">{secondHalfMastered}</div>
        </div>
      </div>
    );
  }
}

export default Progress;
