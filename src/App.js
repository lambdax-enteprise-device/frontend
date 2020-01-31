import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import NavBar from "./components/navbar/NavBar";
import Profile from "./components/Profile";
import PrivateRoute from "./components/PrivateRoute";

import history from "./components/utils/history";

import { useAuth0 } from "./components/auth/react-auth0-spa";
import Login from "./components/Login";

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
          <Route path="/" exact />
          <PrivateRoute path="/profile" component={Profile} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
