import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import DeviceImage from "./assets/devices.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(" + DeviceImage + ")",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "90%",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(10, 10),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  content: {
    marginBottom: theme.spacing(8),
  },
  title: {
    fontWeight: 700,
    marginBottom: theme.spacing(10),
    fontSize: 40,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
  },
  submit: {
    margin: theme.spacing(2, 15),
    width: "50%",
  },
}));

export default function Landing() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} square>
        <div className={classes.paper}>
          <Typography className={classes.title} variant="h4" color="primary">
            Enterprise Device Tracker
          </Typography>
          <Typography className={classes.content} component="h1" variant="h5">
            Create the perfect hardware asset register to organize all your
            employees and the hardware they've been assigned
          </Typography>
          <Typography className={classes.content} component="h1" variant="h5">
            Track hardware assignments across departments and geographic
            locations
          </Typography>
          <Typography className={classes.content} component="h1" variant="h5">
            Minimize expenditures due to lost or missing devices
          </Typography>
          <form className={classes.form} noValidate>
            <Button
              onClick={() => history.push("/login")}
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Login
            </Button>
            <hr/>
            <Button 
              onClick={() => history.push("/signup")}
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submit}
            >
            Sign Up
            </Button>
            <hr />
            <Button
              onClick={() => history.push("/signup")}
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              SignUp
            </Button>
    
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
