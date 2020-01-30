import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "../auth/react-auth0-spa";

import "./NavBar.scss";

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div className="navbar-wrapper">
      <div className="navbar-left">
        <Link to="/">Enterprise Devices</Link>
      </div>

      <div className="navbar-right">
        {!isAuthenticated && (
          <button onClick={() => loginWithRedirect({})}>Log in</button>
        )}

        {isAuthenticated && <button onClick={() => logout()}>Log out</button>}

        {isAuthenticated && (
          <span>
            <Link to="/">Home</Link>&nbsp;
            <Link to="/profile">Profile</Link>
          </span>
        )}
      </div>
    </div>
  );
};

export default NavBar;
