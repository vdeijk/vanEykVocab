import React from "react";
import LoginButton from "../atoms/LoginButton";
import LogoutButton from "../atoms/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

const DashboardTopbar = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  const isUser = isAuthenticated && user;

  return (
    <div className="main-nav__top">
      {isUser && user.picture && (
        <img src={user.picture} className="main-nav__image" alt={user.name} />
      )}
      {isUser && user.name && (
        <h3 className="main-nav__h3">
          Welcome back, <strong>{user.name.toUpperCase()}</strong>
        </h3>
      )}
      {isUser ? (
        <LogoutButton logout={logout} />
      ) : (
        <LoginButton loginWithRedirect={loginWithRedirect} />
      )}
    </div>
  );
};

export default DashboardTopbar;
