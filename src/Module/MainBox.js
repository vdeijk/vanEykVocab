import React, { Component } from 'react';
import QuestionBox from './QuestionBox';
import SideApp from './SideApp';
import SubmitButton from './SubmitButton';
import MasteredButton from './MasteredButton';
import UpdateButtons from './UpdateButtons';
import { connect } from 'react-redux';
import {withRouter } from 'react-router-dom';



class MainBox extends Component {   

  render () {

  let buttonDisplayed;

    switch (this.props.pageDisplayed) {
      case 2:
        buttonDisplayed = <UpdateButtons />
        break;
      case 9: 
        buttonDisplayed = <MasteredButton />
        break;
      default:
        buttonDisplayed = <SubmitButton />
        break;
    }

      return (
        <div>
          <div className="Dashboard-app">
            <div className="DashboardSide-app">
              <SideApp />
            </div>
              <div className="DashboardMain-app"> 
                <QuestionBox />           
                 {buttonDisplayed }
            </div>
          </div>
        </div>
      )}};

      const mapStateToProps = (state) => {
        return {
          pageDisplayed: state.pageDisplayed
        };
      };


      
    export default withRouter(connect(mapStateToProps, null)(MainBox));
    