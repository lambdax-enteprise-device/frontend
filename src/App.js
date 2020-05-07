import React from "react";
import { Route, Switch } from "react-router-dom";
import { withCookies } from "react-cookie";

// import NavBar from "./components/NavBar";
// import Profile from "./components/Profile";
// import PrivateRoute from "./components/PrivateRoute";

import Login from "./components/auth/Login";
import SignupForm from "./components/auth/SignUp";
import Dashboard from "./components/dashboard/Dashboard";
import Landing from "./Landing";
import ManagerApproval from "./components/ManagerApproval";

function App(props) {
  return (
    <div className="App">
    
      {/* <header>
          <NavBar />
        </header> */}

      <Switch>
        <Route path="/" exact component={Landing} />
        
        {/* <PrivateRoute path="/profile" component={Profile} /> */}
        <Route path="/login" render={() => <Login cookies={props.cookies} />} />
        <Route
          path="/signup"
          render={() => <SignupForm cookies={props.cookies} />}
        />
        <Route
          path="/dashboard"
          render={(...props) => <Dashboard cookies={props.cookies} />}
        />
        <Route path="/approval" render={() => <ManagerApproval cookies={props.cookies} />} />
      </Switch>
    </div>
  );
}

export default withCookies(App);
