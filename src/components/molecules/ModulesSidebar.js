import React from "react";

const ModulesSidebar = (props) => {
  return (
    <div className="sidebar-app">
      <div className="sidebar-app__heading">
        <h3>{props.moduleData.name}</h3>
      </div>

      <div className="sidebar_wrap">
        <div className="sidebar_one">
          <p className="p_sidebar">Progress on this word:</p>
          <div className="sidebar_two">
            <p className="p_sidebar_two">{props.wordProgress} %</p>
            &nbsp;&nbsp;
            <progress
              max="100"
              value={props.wordProgress}
              className="progress_bar-sidebar "
            ></progress>
          </div>
        </div>

        <div className="sidebar_one">
          <p className="p_sidebar">Progress on this module:</p>
          <div className="sidebar_two">
            <p className="p_sidebar_two">
              {Math.round(props.moduleData.progress)} %
            </p>
            &nbsp;&nbsp;
            <progress
              max="100"
              value={Math.round(props.moduleData.progress)}
              className="progress_bar-sidebar"
            ></progress>
          </div>
        </div>
      </div>

      <div className="sidebar_btn-container"></div>
    </div>
  );
};

export default ModulesSidebar;
