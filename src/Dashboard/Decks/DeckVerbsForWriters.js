import React, { Component } from "react";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import { allModulesProgress } from "../../Server/ServerData";
import { connect } from "react-redux";

class DeckVerbsForWriters extends Component {
  render() {
    let id = "verbsForWriters";
    return (
      <div className="deck_main">
        <Link to={"/MainBox" + id} key={id} className="deck_area_one">
          <p className="text_left">
            {" "}
            {allModulesProgress[0].moduleProgress} %{" "}
          </p>
        </Link>
        <Link to={"/MainBox" + id} key={id} className="deck_area_two">
          <p className="p_deck-one">Verbs For Writers</p> &nbsp;&nbsp;{" "}
          <p className="p_deck-two">
            {this.props.wordMasteryVFW} of {this.props.totalWordsVFW} words
            Mastered
          </p>
          <progress
            max="100"
            value={allModulesProgress[0].moduleProgress}
            className="progress_bar"
          ></progress>
        </Link>
        <Link className="deck_area_three" to={"/Progress" + id} key={id}>
          <IoIosSearch className="deck_icon" />{" "}
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    wordMasteryVFW: state.moduleStats.wordMasteryVFW,
    wordMasteryA: state.moduleStats.wordMasteryA,
    totalWordsVFW: state.totalWords.totalWordsVFW,
    totalWordsA: state.totalWords.totalWordsA,
  };
};

export default connect(mapStateToProps, null)(DeckVerbsForWriters);
