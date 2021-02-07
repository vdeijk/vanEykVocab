import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../../components/atoms/LoginButton";

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="login">
      <form className="login__container">
        <div className="login__header">
          <h1 className="login__h1">Clear It up!</h1>
          <h3 className="login__h3">Become an advanced English speaker</h3>
        </div>
        <LoginButton loginWithRedirect={loginWithRedirect} />
      </form>
    </div>
  );
};

export default Login;
