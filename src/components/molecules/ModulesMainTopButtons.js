import React from "react";
import ModulesPopup from "../molecules/ModulesPopup";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";

const ModulesMainTopButtons = (props) => {
  return (
    <>
      {props.modulesShowPopup ? <ModulesPopup /> : null}
      <Link to="/">
        <IoIosCloseCircleOutline className="main-window__icon" />
      </Link>
      <IoIosHelpCircleOutline
        className="main-window__icon"
        onClick={props.togglePopup}
      />
    </>
  );
};

export default ModulesMainTopButtons;
