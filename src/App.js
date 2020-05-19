import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import { withCookies } from "react-cookie";
import '@stripe/stripe-js';
// import NavBar from "./components/NavBar";
// import Profile from "./components/Profile";
// import PrivateRoute from "./components/PrivateRoute";

import Login from "./components/auth/Login";
import SignupForm from "./components/auth/SignUp";
import Dashboard from "./components/dashboard/Dashboard";
import EquipmentRequest from "./components/EquipmentRequest.js";

import ForgotPassword from './components/auth/ForgotPassword'
import SignUp from "./components/auth/SignUp";

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
        <Route
          path="/login"
          component={Login}
          render={() => <Login cookies={props.cookies} />}
        />
        <Route
          path="/signup"
          component={SignUp}
          render={() => <SignupForm cookies={props.cookies} />}
        />
       
        <Route
          path="/dashboard"
          component={Dashboard}
          render={(...props) => <Dashboard cookies={props.cookies} />}
        />
        <Route 
          path="/equipment-request"
          render={(...props) => <EquipmentRequest cookies={props.cookies} />}
        />
        <Route path="/approval" render={() => <ManagerApproval cookies={props.cookies} />} />
       <Route path="/forgotpassword" render={() => <ForgotPassword cookies={props.cookies}/>}/>

      </Switch>
    </div>
  );
}

export default withCookies(App);
