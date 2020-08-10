import React, { Component } from 'react';
import { dashboardCalculations } from "../Server/ServerFunctions";
import { overallStatistics } from "../Server/ServerFunctions";

class Statistics extends Component {
  state = {
    overallStatistics: {},
  };

  constructor(props) {
    super(props);
    dashboardCalculations();
  };

  componentDidMount() {
    this.setState({overallStatistics: overallStatistics
    })}

  render () {
      return (
        <div className="siderbar_container ">
          <div className="sidebar_heading-container">
            <h3 className="h3_app">Your statistics</h3>
          </div>
          <div className="sidebar_statistics-container">
          <div className="statistics_one">
            <p className="p_statistics">Words mastered:</p>
            <div className="statistics_two">
              <p className="p_statistics">{this.state.overallStatistics.totalWordMastery}/
              {this.state.overallStatistics.totalOverallWords}</p>&nbsp;&nbsp;
              <progress max={this.state.overallStatistics.totalOverallWords} value={this.state.overallStatistics.totalWordMastery}
              className="progress_bar-statistics "></progress>
            </div>
            </div>

            <div className="statistics_one">
              <p className="p_statistics">Modules mastered:</p>
              <div className="statistics_two">
                <p className="p_statistics">{this.state.overallStatistics.totalModulesCleared}/
                {this.state.overallStatistics.totalModules}</p>&nbsp;&nbsp;
                <progress max={this.state.overallStatistics.totalModules} value={this.state.overallStatistics.totalModulesCleared}
                className="progress_bar-statistics "></progress>
              </div>
              </div>
        </div>
        </div>
      );
    }
}
  
export default Statistics;
 



