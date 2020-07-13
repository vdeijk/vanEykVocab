import React, { Component } from 'react';
import './App.css';
import DashboardMain from './Dashboard/DashboardMain.js';
import MainBox from './Module/MainBox.js';
import {BrowserRouter} from 'react-router-dom';
import {Route, Switch } from 'react-router-dom';

class App extends Component {     

  render () {
      return (
          <BrowserRouter>
            <Switch>
              <Route path="/MainBox:id" component={MainBox} />
              <Route path="/" component={DashboardMain} />
            </Switch>
          </BrowserRouter>
      );
    }
}

export default App;
