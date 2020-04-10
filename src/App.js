import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import './App.css';

import NavBar from "./components/NavBar";
import Profile from "./components/Profile";
import PrivateRoute from "./components/PrivateRoute";
import Registration from "./components/Login/Registration"
import Login from "./components/Login/Login"

import history from "./components/utils/history";

import { useAuth0 } from "./components/auth/react-auth0-spa";
import ManagerApproval from "./components/ManagerApproval";

function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <Router history={history}>
        <header>
          <NavBar />
        </header>
        <Switch>
          {/* <Route path="/" exact /> */}
          <Route exact path="/login" component={Login} />
          <Route path="/approval" component={ManagerApproval} />
          <Route exact path="/registration" component={Registration} />
          <PrivateRoute path="/profile" component={Profile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
