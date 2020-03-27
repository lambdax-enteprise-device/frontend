import React from "react";
import { Route, Switch } from "react-router-dom";

import styled from 'styled-components';
import { ReactComponent as DeviceImage } from "./assets/devices.svg"

import { withCookies } from "react-cookie";

// import NavBar from "./components/NavBar";
// import Profile from "./components/Profile";
// import PrivateRoute from "./components/PrivateRoute";

import Login from "./components/auth/Login";
import SignupForm from "./components/auth/SignUp";
import Dashboard from "./components/dashboard/Dashboard";

const StyledImage = styled.div`
  border: 2px solid palevioletred;
  
`;

function App(props) {
  return (
    <div className="App">

      <StyledImage>
        <DeviceImage />
      </StyledImage>
    
      {/* <header>
          <NavBar />
        </header> */}
      <Switch>
        <Route path="/" exact />
        {/* <PrivateRoute path="/profile" component={Profile} /> */}
        <Route
          path="/login"
          render={(...props) => <Login cookies={props.cookies} />}
        />
        <Route
          path="/signup"
          render={(...props) => <SignupForm cookies={props.cookies} />}
        />
        <Route
          path="/dashboard"
          render={(...props) => <Dashboard cookies={props.cookies} />}
        />
      </Switch>
    </div>
  );
}

export default withCookies(App);
