import React, { Component } from 'react';
import { PageZero } from './Content/InnerPages';
import { PageOne } from './Content/InnerPages';
import { PageTwo } from './Content/InnerPages';
import { PageThree } from './Content/InnerPages';
import { PageFour } from './Content/InnerPages';
import { PageFive } from './Content/InnerPages';
import { PageSix } from './Content/InnerPages';
import { PageSeven } from './Content/InnerPages';
import { PageEight } from './Content/InnerPages';
import { PageNine } from './Content/InnerPages';
import { setActiveModule } from '../Server/ServerFunctions';
import {progressTracker } from '../Server/ServerFunctions';
import { connect } from 'react-redux';
import {withRouter } from 'react-router-dom';

export let submitValue;
export let activeModule;



class QuestionBox extends Component {     
  constructor(props) {
    super(props);
    this.props.setInitialState();
    activeModule  = this.props.match.params.id;
  }
  
    render () {
    
      let pageContent;

      switch (this.props.pageDisplayed) {
        case 0:
          pageContent = <PageZero />
          submitValue = 0;
          setActiveModule();
          break;
        case 1: 
          pageContent = <PageOne />
          submitValue = 1;
          break;
        case 2: 
          pageContent = <PageTwo />
          submitValue = 2;
          break;
        case 3: 
          pageContent = <PageThree />
          submitValue = 3;
          progressTracker();
          break;
        case 4: 
          pageContent = <PageFour />
          submitValue = 4;
          break;
        case 5: 
          pageContent = <PageFive />
          submitValue = 5;
          break;
        case 6: 
          pageContent = <PageSix />
          submitValue = 6;
          break; 
        case 7: 
          pageContent = <PageSeven />
          submitValue = 7;
          break; 
        case 8:
          pageContent = <PageEight />
          submitValue = 8;
          progressTracker();
          break;
        case 9:
          pageContent = <PageNine/>
          submitValue = 9;
          break;
        default: 
        break; 
      }
return (
  <div>
    {pageContent}
 </div>
)  
}

};

const mapStateToProps = (state) => {
    return {
      pageDisplayed: state.pageDisplayed,
    };
  };
  
const mapDispatchToProps = dispatch => {
    return {
        setInitialState: () => dispatch ({
        type: 'SET_INITIAL_STATE'})
    }
  };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(QuestionBox));
  