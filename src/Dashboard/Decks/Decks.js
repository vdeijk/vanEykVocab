import React, { Component } from "react";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import { allModulesProgress } from "../../Server/ServerData";

class Decks extends Component {
  render() {
    let i = 0;
    const displayThis = allModulesProgress.map(() => {
      let name = allModulesProgress[i].name;
      let id = allModulesProgress[i].id;
      let moduleProgress = allModulesProgress[i].moduleProgress;
      let wordMastery = allModulesProgress[i].wordMastery;
      let totalWords = allModulesProgress[i].totalWords;
      i++;
      return (
        <div className="deck_main">
          <Link to={"/MainBox" + id} key={id} className="deck_area_one">
            <p className="text_left">{moduleProgress} %</p>
          </Link>
          <Link to={"/MainBox" + id} key={id} className="deck_area_two">
            <p className="p_deck-one">{name}</p> &nbsp;&nbsp;
            <p className="p_deck-two">
              {wordMastery} of {totalWords} words Mastered
            </p>
            <progress
              max="100"
              value={moduleProgress}
              className="progress_bar"
            ></progress>
          </Link>
          <Link className="deck_area_three" to={"/Progress" + id} key={id}>
            <IoIosSearch className="deck_icon" />
          </Link>
        </div>
      );
    });

    return <div>{displayThis}</div>;
  }
}

export default Decks;
