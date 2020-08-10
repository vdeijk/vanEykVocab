import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class SideApp extends Component {
  render() {
    return (
      <div className="SideApp">
        <div className="SideApp_heading">
        <h3 className="h3_app">{this.props.moduleName}</h3>
        </div>

        <div className="sidebar_wrap">
          <div className="sidebar_one">
            <p className="p_sidebar">Progress on this word:</p>
            <div className="sidebar_two">
              <p className="p_sidebar_two">{this.props.wordProgress} %</p>
              &nbsp;&nbsp;
              <progress
                max="100"
                value={this.props.wordProgress}
                className="progress_bar-sidebar "
              ></progress>
            </div>
          </div>

          <div className="sidebar_one">
            <p className="p_sidebar">Progress on this module:</p>
            <div className="sidebar_two">
              <p className="p_sidebar_two">{this.props.moduleProgress} %</p>
              &nbsp;&nbsp;
              <progress
                max="100"
                value={this.props.moduleProgress}
                className="progress_bar-sidebar"
              ></progress>
            </div>
          </div>
        </div>

        <div className="sidebar_btn-container"></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    wordProgress: state.moduleStats.wordProgress,
    wordMastery: state.moduleStats.wordMastery,
    moduleProgress: state.moduleStats.moduleProgress,
    totalWords: state.moduleStats.totalWords,
    moduleName: state.moduleStats.moduleName,
  };
};

export default withRouter(connect(mapStateToProps, null)(SideApp));
