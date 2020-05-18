import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import DeviceImage from "./assets/devices.svg";
import EquipImage from "./assets/equipment.jpg";
import LaptopImage from "./assets/laptops.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    width: "90%",
    margin: theme.spacing(0, 10),
  },
  title: {
    textAlign: "center",
    fontSize: 50,
    fontWeight: 700,
    margin: theme.spacing(5, 0, 2, 0),
  },
  section: {
    width: "80%",
    margin: theme.spacing(2, 15),
  },
  row: {
    display: "flex",    
    justifyContent: "center",
    height: "240px",
    width: "70%",
    margin: theme.spacing(0, 15),
  },
  image: {
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "90%",
    backgroundPosition: "center",

  },
  image1: {
    backgroundImage: "url(" + EquipImage + ")",
    marginLeft: theme.spacing(5)
  },
  image2: {
    backgroundImage: "url(" + DeviceImage + ")",
  },
  image3: {
    backgroundImage: "url(" + LaptopImage + ")",
    marginLeft: theme.spacing(5),
  },
  
  content: {
    margin: theme.spacing(8, 4),
    // marginLeft: theme.spacing(0),
    width: "50%",
  },
  contentAlt: {
    margin: theme.spacing(8, 4),
    // marginRight: theme.spacing(0),
    textAlign: "right",
    width: "50%",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    margin: theme.spacing(0, 10, 10, 10),
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    textAlign: "center",
  },
  submit: {
    margin: theme.spacing(2, 15),
    width: "30%",
  },
}));

export default function Landing() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} sm={12} md={12}>
        <Typography className={classes.title} variant="h4" color="primary">
          Enterprise Device Tracker
        </Typography>
        <hr></hr>
      </Grid>

      <div className={classes.section}>
        <Grid item borderBottom={1} xs={false} sm={4} md={12} className={classes.row}>
          <Grid item xs={false} sm={4} md={7} className={`${classes.image1} ${classes.image}`} />
          <Typography className={classes.content} component="h1" variant="h5">
          Create the perfect hardware asset register to organize and track all your
          company's hardware
          </Typography>
        </Grid>

        <Grid item borderBottom={1} divider xs={false} sm={4} md={12} className={classes.row}>
          <Typography className={`${classes.content} ${classes.contentAlt}`} component="h1" variant="h5">
          Track hardware assignments across departments and geographic
          locations
          </Typography>
          <Grid item xs={false} sm={4} md={7} className={`${classes.image2} ${classes.image}`} />
        </Grid>
        
        <Grid item xs={false} sm={4} md={12} className={classes.row}>
          <Grid item xs={false} sm={4} md={7} className={`${classes.image3} ${classes.image}`} />
          <Typography className={classes.content} component="h1" variant="h5">
          Minimize expenditures due to lost or missing devices
          </Typography>
        </Grid>
      </div>
        
        <Grid item xs={12} sm={8} md={12} className={classes.row}>
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
            
            <Button 
            onClick={()=> history.push("/signup")}
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
            >
            Sign Up
            </Button>
          </form>
        </Grid>
      
    </Grid>
  );
}
