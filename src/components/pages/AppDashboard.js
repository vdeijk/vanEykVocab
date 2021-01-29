import React, { useEffect } from "react";
import DashboardDecks from "../organisms/DashboardDecks";
import DashboardAbout from "../organisms/DashboardAbout";
import DashboardHelp from "../organisms/DashboardHelp";
import DashboardAccount from "../organisms/DashboardAccount";
import DashboardProgress from "../organisms/DashboardProgress";
import DashboardNavBar from "../molecules/DashboardNavBar";
import DashboardStatistics from "../molecules/DashboardStatistics";
import DashboardSocialIcons from "../molecules/DashboardSocialIcons";
import { Route } from "react-router-dom";
import { useGlobalContext } from "../../context/context";

const AppDashboard = () => {
  const { setInitialRound } = useGlobalContext();

  useEffect(setInitialRound, []);

  return (
    <div className="dashboard">
      <div className="sidebar">
        <DashboardStatistics />
        <DashboardSocialIcons />
      </div>

      <div className="dashboard-main">
        <div className="header">
          <div className="header-text__main">Clear It up!</div>
          <div className="header-text__sub">
            Become an advanced English speaker
          </div>
        </div>
        <DashboardNavBar />
        <Route path="/" exact component={DashboardDecks} />
        <Route path="/help" component={DashboardHelp} />
        <Route path="/about" component={DashboardAbout} />
        <Route path="/account" component={DashboardAccount} />
        <Route path="/progress/:id" component={DashboardProgress} />
      </div>
    </div>
  );
};

export default AppDashboard;
