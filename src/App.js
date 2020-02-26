import React from "react";
import { Router, Route, Switch } from "react-router-dom";

// import NavBar from "./components/NavBar";
// import Profile from "./components/Profile";
// import PrivateRoute from "./components/PrivateRoute";


import history from "./components/utils/history";

import Login from "./components/Login";

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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
