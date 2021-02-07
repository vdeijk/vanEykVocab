import React from "react";

const LoginButton = ({ loginWithRedirect }) => {
  return (
    <button className="login__button" onClick={() => loginWithRedirect()}>
      Log In
    </button>
  );
};

export default LoginButton;
