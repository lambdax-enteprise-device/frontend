import React from "react";
import { useEffect, useState, useCallback } from "react";
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
  // const getDevicesCallback = useCallback(() => {
  //   getDevices()
  //     .then((res) => {
  //       console.log(res, "res in device call");
  //       setDevices({ devices: props.devices });
  //     })
  //     .catch((err) => {
  //       console.log("GET err,", err);
  //     });
  // });

  const [devicesState, setDevices] = useState({ devicesState: [] });
  useEffect(() => {
    // console.log(props, "ALL PROPS");
    // console.log(getDevices, "is getdevices undefined?");
    // console.log(props.getDevices, "props.getDeivces");
    // getDevicesCallback();
    // console.log(props.gettingDevices, "getting devices");
    // if (props.gettingDevices === false) {
    getDevices()
      // setDevices({ devicesState: props.devices });
      .then((res) => {
        // console.log(res, "res in device call");
        console.log(props.devices, "redux store devices");
        setDevices({ devicesState: props.devices });
      })
      .catch((err) => {
        console.log("Error in useEffect for device fetch, ", err);
      });
    // }
    // axios
    // .get("https://enterprise-devices-testing.herokuapp.com/api/devices")
    // .then((res) => {
    //   console.log(res, "get RES");
    //   setDevices({ devices: res });
    // })
    // .catch((err) => {
    //   console.log("GET err,", err);
    // });
    // }
  }, [props.devices.length]);

  console.log(devicesState, "devices state");
  console.log(props.devices, "redux device state after useeffect");
  console.log(props, "ALL PROPS");
  return (
    <div className={classes.root}>
      <CssBaseline />

      <SideBar />

      <main className={classes.content}>
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Devices devices={devicesState} />
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
