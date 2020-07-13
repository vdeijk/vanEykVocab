import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter } from 'react-router-dom';


let wordMastery;
let totalWords;
let activeModule


class SideApp extends Component {     
 
  render () {
    activeModule  = this.props.match.params.id;

    switch(activeModule) {
      case "verbsForWriters":
      wordMastery = this.props.wordMasteryVFW;
      totalWords = this.props.totalWordsVFW;
      break;
      case "moduleA":
      wordMastery = this.props.wordMasteryA;
      totalWords = this.props.totalWordsA;
      break;
      default:
      break;
  }
  

      return (
        <div className="SideApp">
          <div className="p_heading-sidebar-top">
            <p>Module A</p>
          </div>

        <div className="sidebar_wrap">
          <div className="sidebar_one">
            <p className="p_sidebar">Progress on this word:</p>
            <div className="sidebar_two">
              <p className="p_sidebar_two">{this.props.wordProgress} %</p>&nbsp;&nbsp;
              <progress max="100" value={this.props.wordProgress} className="progress_bar-sidebar "></progress>
            </div>
            </div>

            <div className="sidebar_one">
              <p className="p_sidebar">Words mastered:</p>
              <div className="sidebar_two">
                <p className="p_sidebar_two">{wordMastery}/{totalWords}</p>&nbsp;&nbsp;
                <progress max={totalWords} value={wordMastery}
                className="progress_bar-sidebar "></progress>
              </div>
            </div>

              <div className="sidebar_one">
              <p className="p_sidebar">Progress on this module:</p>
              <div className="sidebar_two">
                <p className="p_sidebar_two">{this.props.moduleProgress} %</p>&nbsp;&nbsp;
                <progress max="100" value={this.props.moduleProgress}
                className="progress_bar-sidebar"></progress>
            </div>
         </div>
         </div>

          <div className="sidebar_btn-container">
           
        </div>

        </div>
      );
    }
  }

  const mapStateToProps = (state) => {
    return {
      wordProgress: state.moduleStats.wordProgress,
      wordMasteryVFW: state.moduleStats.wordMasteryVFW,
      wordMasteryA: state.moduleStats.wordMasteryA,
      moduleProgress: state.moduleStats.moduleProgress,
      totalWordsVFW: state.totalWords.totalWordsVFW,
      totalWordsA: state.totalWords.totalWordsA,
    };
  };
  
export default withRouter(connect(mapStateToProps, null)(SideApp));
  