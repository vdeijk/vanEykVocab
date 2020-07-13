import React, { Component } from 'react';
import { connect } from 'react-redux';


class Statistics extends Component {     

  render () {
      return (
        <div className="Statistics">
          <div className="p_heading-statistics">
            <p >Your statistics</p>
          </div>
          <div className="statistics_one">
            <p className="p_statistics">Total words mastered:</p>
            <div className="statistics_two">
              <p className="p_statistics_two">{this.props.totalOverallWordsCleared}/
              {this.props.totalOverallWords}</p>&nbsp;&nbsp;
              <progress max={this.props.totalOverallWords} value={this.props.totalOverallWordsCleared}
              className="progress_bar-statistics "></progress>
            </div>
            </div>

            <div className="statistics_one">
              <p className="p_statistics">Total modules cleared:</p>
              <div className="statistics_two">
                <p className="p_statistics_two">{this.props.totalModulesCleared}/
                {this.props.totalModules}</p>&nbsp;&nbsp;
                <progress max={this.props.totalModules} value={this.props.totalModulesCleared}
                className="progress_bar-statistics "></progress>
              </div>
            </div>

        </div>
      );
    }
  }


  const mapStateToProps = (state) => {
    return {
      totalModules: state.overallStats.totalModules,
      totalModulesCleared: state.overallStats.totalModulesCleared,
      totalOverallWords: state.overallStats.totalOverallWords,
      totalOverallWordsCleared: state.overallStats.totalOverallWordsCleared
    };
  };

  
export default connect(mapStateToProps, null)(Statistics);
 



