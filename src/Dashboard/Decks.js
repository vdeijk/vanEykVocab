import React, { Component } from "react";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import { allModulesProgress } from "../Server/ServerFunctions";

class Decks extends Component {

  render() {
    let i = 0;
    let displayThis;

    displayThis = allModulesProgress.map(() => {
      let moduleName = allModulesProgress[i].moduleName;
      let id = allModulesProgress[i].id;
      let moduleProgress = allModulesProgress[i].moduleProgress;
      let totalWords = allModulesProgress[i].totalWords;
      i++;

      console.log(moduleProgress);
      if (moduleProgress < 100) {
      return (
        <div className="deck_main" key={"deck" + i}>
          <Link to={"/MainBox" + id} className="deck_area_one">
            <p className="text_left">{moduleProgress}%</p>
          </Link>
          <Link to={"/MainBox" + id} className="deck_area_two">
            <p className="p_deck-one">{moduleName}</p> &nbsp;&nbsp;
            <p className="p_deck-two">{totalWords} words</p>
            <progress
              max="100"
              value={moduleProgress}
              className="progress_bar"
            ></progress>
          </Link>
          <Link className="deck_area_three" to={"/Progress" + id}>
            <IoIosSearch className="deck_icon" />
          </Link>
        </div>
      )} else {
        return (
        <div className="deck_main" key={"deck" + i}>
        <Link className="deck_area_one">
            <p className="text_left">{moduleProgress}%</p>
          </Link>
          <Link className="deck_area_two">
            <p className="p_deck-one">{moduleName}</p> &nbsp;&nbsp;
            <p className="p_deck-two">{totalWords} words</p>
            <progress
              max="100"
              value={moduleProgress}
              className="progress_bar"
            ></progress>
          </Link>
          <Link className="deck_area_three" to={"/Progress" + id}>
            <IoIosSearch className="deck_icon" />
          </Link>
        </div>
        )}
    });

    return <div>{displayThis}</div>;
  }
}

export default Decks;
