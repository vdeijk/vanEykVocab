import React from "react";

const LogoutButton = ({ logout }) => {
  return (
    <button
      className="main-nav__button"
      onClick={() => {
        logout({ returnTo: window.location.origin });
      }}
    >
      Log Out
    </button>
  );
};

export default LogoutButton;
