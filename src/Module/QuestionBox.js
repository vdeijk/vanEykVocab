import React, { Component } from "react";
import { connect } from "react-redux";

import PageZero from "./Content/PageZero";
import PageOne from "./Content/PageOne";
import PageTwo from "./Content/PageTwo";
import PageThree from "./Content/PageThree";
import PageFour from "./Content/PageFour";
import PageFive from "./Content/PageFive";
import PageSix from "./Content/PageSix";
import PageSeven from "./Content/PageSeven";


class QuestionBox extends Component {

  render() {
    let pageContent;

    switch (this.props.pageDisplayed) {
      case 0:
        pageContent = <PageZero />;
        break;
      case 1:
        pageContent = <PageOne />;
        break;
      case 2:
        pageContent = <PageTwo />;
        break;
      case 3:
        pageContent = <PageThree />;
        break;
      case 4:
        pageContent = <PageFour />;
        break;
      case 5:
        pageContent = <PageFive />;
        break;
      case 6:
        pageContent = <PageSix />;
        break;
      case 7:
        pageContent = <PageSeven />;
        break;
      default:
        break;
    }
    return <div>{pageContent}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    pageDisplayed: state.pageDisplayed,
  };
};

export default connect(mapStateToProps, null)(QuestionBox);
