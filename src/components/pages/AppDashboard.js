import React, { useState, useEffect } from "react";
import DashboardDecks from "../organisms/DashboardDecks";
import DashboardAbout from "../organisms/DashboardAbout";
import DashboardHelp from "../organisms/DashboardHelp";
import DashboardAccount from "../organisms/DashboardAccount";
import DashboardProgress from "../organisms/DashboardProgress";
import DashboardNavbar from "../molecules/DashboardNavbar";
import DashboardTopbar from "../molecules/DashboardTopbar";
import DashboardStatistics from "../molecules/DashboardStatistics";
import DashboardSocialIcons from "../molecules/DashboardSocialIcons";
import { Route } from "react-router-dom";
import { calculateDashboardStats } from "../../calculations/calculations";
import { useGlobalContext } from "../../context/context";

const AppDashboard = () => {
  const { setInitialState } = useGlobalContext();

  const [dashboardStats, setDashboardStats] = useState({
    totalModules: 0,
    totalWords: 0,
    modulesCleared: 0,
    wordMastery: 0,
    dataModules: [],
  });

  useEffect(() => {
    setInitialState();
    fetchData();
  }, []);

  const fetchData = async () => {
    const overallStatsTemp = await calculateDashboardStats();
    setDashboardStats(overallStatsTemp);
  };

  return (
    <div className="dashboard">
      <div className="dashboard__side">
        <DashboardStatistics overallStats={dashboardStats} />
        <DashboardSocialIcons />
      </div>

      <div className="dashboard__main">
        <div className="main-nav">
          <DashboardTopbar />
          <DashboardNavbar />
        </div>
        <div className="dashboard__page">
          <Route path="/" exact>
            <DashboardDecks dataModules={dashboardStats.dataModules} />
          </Route>
          <Route path="/help" component={DashboardHelp} />
          <Route path="/about" component={DashboardAbout} />
          <Route path="/account" component={DashboardAccount} />
          <Route path="/progress/:id" component={DashboardProgress} />
        </div>
      </div>
    </div>
  );
};

export default AppDashboard;
