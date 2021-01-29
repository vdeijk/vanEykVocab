import React from "react";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import { dataModules } from "../../data/dataModules";

const DashboardDecks = () => {
  let dashboardDecks = dataModules.map((el, index) => {
    if (!el.mastered) {
      const { moduleName, moduleProgress, totalWords } = el;

      return (
        <div className="deck" key={"deck" + index}>
          <Link to={"/mainBox/" + index} className="deck__one">
            <p className="text_left">{Math.round(moduleProgress)}%</p>
          </Link>
          <Link to={"/mainBox/" + index} className="deck__two">
            <p className="deck-p__large">{moduleName}</p> &nbsp;&nbsp;
            <p className="deck-p__small">{totalWords} words</p>
            <progress
              max="100"
              value={Math.round(moduleProgress)}
              className="deck__progress-bar"
            ></progress>
          </Link>
          <Link className="deck__three" to={"/progress/" + index}>
            <IoIosSearch className="deck__icon" />
          </Link>
        </div>
      );
    } else return null;
  });

  return <div>{dashboardDecks}</div>;
};

export default DashboardDecks;
