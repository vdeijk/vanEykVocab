import React from "react";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";

const DashboardDecks = (props) => {
  const dataModules = props.dataModules;

  let dashboardDecks = dataModules.map((el, index) => {
    if (el.unmasteredWords.length > 0) {
      const { moduleName, moduleProgress } = el;
      const totalWords = el.masteredWords.length + el.unmasteredWords.length;

      return (
        <div className="deck" key={"deck" + index}>
          <Link to={"/mainBox/" + index} className="deck__left">
            <h2 className="deck__h2">{Math.round(moduleProgress)}%</h2>
          </Link>
          <Link to={"/mainBox/" + index} className="deck__middle">
            <h3 className="deck__h3">{moduleName}&nbsp;&nbsp;</h3>
            <p className="deck__p">{totalWords} words</p>
            <progress
              className="deck__progress"
              max="100"
              value={Math.round(moduleProgress)}
            />
          </Link>
          <Link className="deck__right" to={"/progress/" + index}>
            <IoIosSearch className="deck__icon" />
          </Link>
        </div>
      );
    } else return null;
  });

  return <>{dashboardDecks}</>;
};

export default DashboardDecks;
