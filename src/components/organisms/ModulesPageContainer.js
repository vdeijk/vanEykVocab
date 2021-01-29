import React from "react";
import ModulesPageZero from "./ModulesPageZero";
import ModulesPageOne from "./ModulesPageOne";
import ModulesPageTwo from "./ModulesPageTwo";
import ModulesPageThree from "./ModulesPageThree";
import ModulesPageFour from "./ModulesPageFour";
import ModulesPageFive from "./ModulesPageFive";
import ModulesPageUnmasteredWord from "./ModulesPageUnmasteredWord";
import ModulesPageMasteredWord from "./ModulesPageMasteredWord";

const ModulesPageContainer = (props) => {
  const pages = [
    <ModulesPageZero />,
    <ModulesPageOne />,
    <ModulesPageTwo />,
    <ModulesPageThree />,
    <ModulesPageFour />,
    <ModulesPageFive />,
    <ModulesPageUnmasteredWord />,
    <ModulesPageMasteredWord />,
  ];
  const pageContent = pages[props.pageDisplayed];

  return <div>{pageContent}</div>;
};

export default ModulesPageContainer;
