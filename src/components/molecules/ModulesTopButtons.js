import React from "react";
import ModulesPopup from "./ModulesPopup";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";

const ModulesTopButtons = (props) => {
  return (
    <>
      {props.modulesShowPopup ? <ModulesPopup /> : null}
      <div className="modules__icons">
        <IoIosHelpCircleOutline
          className="modules__icon"
          onClick={props.togglePopup}
        />
        <Link to="/">
          <IoIosCloseCircleOutline className="modules__icon" />
        </Link>
      </div>
    </>
  );
};

export default ModulesTopButtons;
