import React from "react";
import Decks from "./Decks";
import About from "./NavBar/About";
import Help from "./NavBar/Help";
import Account from "./NavBar/Account";
import NavBar from "./NavBar/NavBar";
import Statistics from "./Statistics";
import SocialIcons from "./SocialIcons";
import Progress from "../Inspect/Progress";
import { Route } from "react-router-dom";

function DashboardMain() {
 
    return (
      <div className="Dashboard">
        <div className="DashboardSide">
          <Statistics />
          <SocialIcons />
        </div>

        <div className="DashboardMain">
          <div className="header">
            <div className="headerText">VanEyk Vocab</div>
            <div className="headerTextTwo">
              Become an advanced English speaker
            </div>
          </div>
          <NavBar />
          <Route path="/" exact render={() => <Decks />} />
          <Route path="/Help" component={Help} />
          <Route path="/About" component={About} />
          <Route path="/Account" component={Account} />
          <Route path="/Progress:id" component={Progress} />
        </div>
      </div>
    );
  }

export default DashboardMain;
