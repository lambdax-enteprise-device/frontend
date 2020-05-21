import React from "react";
import { connect } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { login } from "../../actions";
import History from "../utils/History";
// UI Imports
// import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox"; // TODO: Will add to save credentials, longer cookie?!
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
// import Box from "@material-ui/core/Box";
// import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "15%",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = (props) => {
  const classes = useStyles(); //material ui class
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validateOnChange: false, //* To prevent onChange validation so errors don't pop until onBlur
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("This field is required"),
      password: Yup.string()
        .min(8, "Password must be 8 characters or more")
        .required("This field is required"),
    }),

    onSubmit: (values) => {
      const { login } = props;

      login(values)
        .then((res) => {
          //! Error, props.cookies is undefined
          // props.cookies.set("entDeviceToken", res.data.token, { path: "/" });
          //TODO: Once completed, push user to dashboard
          props.history.push("/dashboard");
        })
        .catch((error) => {
          console.log("ERROR");
          console.log({ message: error });
          //TODO: Render error Div
        });
    },
  });

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Paper className={classes.paper}>
        {/* <Avatar className={classes.avatar}></Avatar> */}
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form
          className={classes.form}
          onSubmit={formik.handleSubmit}
          noValidate
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={formik.handleChange}
            error={formik.touched.email && formik.errors.email ? true : false}
            helperText={formik.errors.email}
            {...formik.getFieldProps("email")}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={formik.handleChange}
            error={
              formik.touched.password && formik.errors.password ? true : false
            }
            helperText={formik.errors.password}
            {...formik.getFieldProps("password")}
          />
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          {/* // TODO: Submit button needs to be clicked twice if cursor is inside PW field */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="https://enterprise-devices-testing.herokuapp.com/api/auth/password/forgotpassword" variant="body2">
                Forgot password?
              </Link>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggingIn: state.authReducer.isLoggingIn,
    error: state.authReducer.error,
    user: state.authReducer.user,
    loginSuccess: state.authReducer.loginSuccess,
  };
};

export default connect(mapStateToProps, { login })(Login);

/*
    onSubmit: values => {

      const {cookies,login,error} = props
       
        login(values,(props.response,error =>{
          History.push(props.history)
        if(props.response) {
               
           cookies.cookies.set("entDeviceToken", props.response.data.token, { path: props.state.history });
        }
        return error => {console.log(error)}
     
          //TODO: Once completed, push user to dashboard
        }
        ))
    }

*/
