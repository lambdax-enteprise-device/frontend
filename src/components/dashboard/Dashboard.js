import React from "react";
import { useEffect, useState, useReducer, useCallback } from "react";
import axios from "axios";
import { connect } from "react-redux";

//actions
import { getDevices, addDevice, updateDevice } from "../../actions/devices.js";

//styles
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

// import IconButton from "@material-ui/core/IconButton";
// import Typography from "@material-ui/core/Typography";

import Link from "@material-ui/core/Link";
import ResponsiveDrawer from "./NavBar";

// import MenuIcon from "@material-ui/icons/Menu";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import clsx from "clsx";

import SideBar from "./SideBar/SideBar";
import Devices from "./devices/Devices.js";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },

  appBarSpacer: theme.mixins.toolbar,
  content: {
    width: "100vw",
  },
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
}));

const Dashboard = (props) => {
  const classes = useStyles();
  const { getDevices, addDevice, removeDevice } = props;

  useEffect(() => {

    getDevices();
  }, [getDevices]);

  return (
    <div className={classes.root}>
      <CssBaseline />

      <SideBar />

      <main className={classes.content}>
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                {props.gettingDevices ? (
                  <div>Loading...</div>
                ) : (
                  <Devices devices={props.devices} />
                )}
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    devices: state.deviceReducer.devices,
    error: state.deviceReducer.error,
    gettingDevices: state.deviceReducer.gettingDevices,
  };
};

export default connect(mapStateToProps, {
  getDevices,
  addDevice,
  updateDevice,
})(Dashboard);
