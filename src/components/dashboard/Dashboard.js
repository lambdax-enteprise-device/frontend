import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
//styles
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

// import IconButton from "@material-ui/core/IconButton";
// import Typography from "@material-ui/core/Typography";

import Link from "@material-ui/core/Link";
import ResponsiveDrawer from './NavBar'
<<<<<<< HEAD
import '@stripe/stripe-js';
// import MenuIcon from "@material-ui/icons/Menu";
// import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
// import NotificationsIcon from "@material-ui/icons/Notifications";
// import { mainListItems, secondaryListItems } from "./listItems";
// import Chart from "./Chart";
// import Deposits from "./Deposits";
// import Orders from "./Orders";
=======
>>>>>>> fcb79b6621f7e629fb47fc45ebdb9b25c76f6c8e

// import MenuIcon from "@material-ui/icons/Menu";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import clsx from "clsx";

import SideBar from "./SideBar/SideBar";
import Devices from "./devices/Devices.js";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },

  appBarSpacer: theme.mixins.toolbar,
  content: {
    width: "100vw"
  },
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  },
  fixedHeight: {
    height: 240
  }
}));

const Dashboard = props => {
  const classes = useStyles();

  const [devices, setDevices] = useState({ devices: [] });
  useEffect(() => {
    console.log("IN AXIOS CAL");
    axios
      .get("https://enterprise-devices-testing.herokuapp.com/api/devices")
      .then(res => {
        console.log(res, "get RES");
        setDevices({ devices: res });
      })
      .catch(err => {
        console.log("GET err,", err);
      });
  }, []);


  console.log(devices, "devices state");
  return (
    <div className={classes.root}>
      <CssBaseline />


      <SideBar />

      <main className={classes.content}>
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Devices devices={devices} />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
};

export default Dashboard;
