import React from "react";
import { Router, Route, Switch } from "react-router-dom";

// import NavBar from "./components/NavBar";
// import Profile from "./components/Profile";
// import PrivateRoute from "./components/PrivateRoute";

import history from "./components/utils/history";

import Login from "./components/auth/Login";
import SignupForm from "./components/auth/SignUp";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        {/* <header>
          <NavBar />
        </header> */}
        <Switch>
          <Route path="/" exact />
          {/* <PrivateRoute path="/profile" component={Profile} /> */}
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignupForm} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
