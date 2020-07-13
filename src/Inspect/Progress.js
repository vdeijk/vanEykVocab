import React, { Component } from "react";
import { loadWordList } from "../Server/ServerFunctions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Progress extends Component {
  componentDidMount() {
    loadWordList();
  }

  render() {
    let activeModule = this.props.match.params.id;
    let currentModule;
    let currentModuleMastered;

    switch (activeModule) {
      case "verbsForWriters":
        currentModule = this.props.verbsForWriters;
        currentModuleMastered = this.props.verbsForWritersMastered;
        break;
      case "moduleA":
        currentModule = this.props.moduleA;
        currentModuleMastered = this.props.moduleAMastered;
        break;
      default:
        break;
    }

    //Words learning

    let i = 0;
    const progressItems = currentModule.map((counter) => {
      let name = currentModule[i].name;
      let progressTracker = currentModule[i].progressTracker;
      return (
        <div className="progress_page-button " key={i}>
          <p className="p_progress-one"> Word {(i += 1)} -</p>&nbsp;
          <p>
            {name}: &nbsp;
            {progressTracker}%
          </p>
        </div>
      );
    });

    var firstHalf = progressItems.slice(0, progressItems.length / 2);
    var secondHalf = progressItems.slice(
      progressItems.length / 2,
      progressItems.length
    );

    //Words mastered

    let j = 0;
    const masteredItems = currentModuleMastered.map((counter) => {
      let name = currentModuleMastered[j].name;
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
    });

    var firstHalfMastered = masteredItems.slice(0, masteredItems.length / 2);
    var secondHalfMastered = masteredItems.slice(
      masteredItems.length / 2,
      masteredItems.length
    );

    return (
      <div>
        <h1 className="h1_progress">Words currently learning</h1>
        <div className="progress_page-container ">
          <div className="progress_left-column">{firstHalf}</div>
          <div className="progress_right-column">{secondHalf}</div>
        </div>
        <h1 className="h1_progress">Words Mastered</h1>
        <div className="progress_page-container ">
          <div className="progress_left-column">{firstHalfMastered}</div>
          <div className="progress_right-column">{secondHalfMastered}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    verbsForWriters: state.verbsForWriters,
    moduleA: state.moduleA,
    verbsForWritersMastered: state.verbsForWritersMastered,
    moduleAMastered: state.moduleAMastered,
  };
};

export default withRouter(connect(mapStateToProps, null)(Progress));
