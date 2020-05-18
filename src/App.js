import React from "react";
import { Route, Switch } from "react-router-dom";

import { withCookies } from "react-cookie";

// import NavBar from "./components/NavBar";
// import Profile from "./components/Profile";
// import PrivateRoute from "./components/PrivateRoute";

import Login from "./components/auth/Login";
import SignupForm from "./components/auth/SignUp";
import Dashboard from "./components/dashboard/Dashboard";
import Inventory from "./components/inventory/Inventory"
import AddDevice from "./components/inventory/AddDevice"
import RemoveDevice from "./components/inventory/RemoveDevice"

function App(props) {
  return (
    <div className="App">
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
        <Route
          path="/inventory"
          render={(...props) => <Inventory cookies={props.cookies} />}
          />
          {/*
          <Route
          path="/add-device"
          render={(...props) => <AddDevice cookies={props.cookies} />}
          />
          <Route
          path="/remove-device"
          render={(...props) => <RemoveDevice cookies={props.cookies} />} />
          */}
      </Switch>
    </div>
  );
}

export default withCookies(App);
