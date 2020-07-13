import React, { Component } from 'react';
import Decks from './Decks/Decks';
import About from './NavBar/About';
import Help from './NavBar/Help';
import Account from './NavBar/Account';
import NavBar from './NavBar/NavBar';
import Achievements from './Achievements';
import Statistics from './Statistics';
import SocialIcons from './SocialIcons';

import { loadOverallStatistics } from '../Server/ServerFunctions';
import Progress from '../Inspect/Progress';

import {Route } from 'react-router-dom';


class DashboardMain extends Component {     

  componentDidMount() {
    loadOverallStatistics();
  }

  render () {
      return (
        <div className="Dashboard">
        <div className="DashboardSide">
            <Statistics />
            <Achievements />
            <SocialIcons />
        </div>

        <div className="DashboardMain">
            <div className="header">
                <div className="headerText">
                    Clear it up!
                </div>  
                <div className="headerTextTwo"> 
                Reach your English language dreams today
                </div>
            </div>
            <NavBar />
              <Route path="/" exact component={Decks} />
              <Route path="/Help" component={Help} />
              <Route path="/About" component={About} />
              <Route path="/Account" component={Account} />
              <Route path="/Progress:id" component={Progress} />
        </div>
        </div>
      );
    }
  }


export default DashboardMain;
