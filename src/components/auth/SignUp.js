import React from "react";
import { connect } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { signUp } from "../../actions";

// import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
// // import FormControlLabel from "@material-ui/core/FormControlLabel";
// // import Checkbox from "@material-ui/core/Checkbox";
// import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
// import Box from "@material-ui/core/Box";
// // import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
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
  form: {
    // width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignupForm = (props) => {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
      companyName: "",
      title: "",
      firstName: "",
      lastName: "",
      email: "",
      confirmEmail: "",
    },
    validateOnChange: false, //* To prevent onChange validation so errors don't pop until onBlur
    validationSchema: Yup.object({
      password: Yup.string()
        .min(8, "Must be 8 characters or more")
        .required("Required"),
      confirmPassword: Yup.string()
        .min(8, "Must be 8 characters or more")
        .required("Required")
        .oneOf([Yup.ref("password"), null], "Passwords must match"),
      companyName: Yup.string()
        .max(120, "Must be 20 characters or more")
        .required("Required"),
      title: Yup.string()
        .max(64, "Must be 64 characters or less")
        .required("Required"),
      firstName: Yup.string()
        .max(120, "Must be 120 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(120, "Must be 120 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      confirmEmail: Yup.string()
        .email("Invalid email address")
        .required("Required")
        .oneOf([Yup.ref("email"), null], "Email addresses must match"),
      // TODO: Require complex passwords
    }),
    onSubmit: (values) => {
      //* Formatting request object for submission
      const { cookies, signUp, error } = props
      const {
        firstName,
        lastName,
        title,
        companyName,
        password,
        email,
      } = values;
      const signUpInfo = {
        first_name: firstName,
        last_name: lastName,
        company_name: companyName,
        title: title,
        email: email,
        password: password,
      };

      props
        .signUp(signUpInfo)
        .then((res) => {
          props.cookies.set("entDeviceToken", res.data.token, { path: "/" });
          //TODO: Once completed, push user to dashboard. Currently just the localhost version.
          props.history.push("localhost:3000/dashboard");

        })
        .catch((err) => {
          console.log({ message: err });
        });
    },
  });
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Paper className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <form onSubmit={formik.handleSubmit} className={classes.form}>
          <TextField
            label="First Name"
            name="firstName"
            type="text"
            id="first-name"
            required
            onChange={formik.handleChange}
            error={
              formik.touched.firstName && formik.errors.firstName ? true : false
            }
            helperText={formik.errors.firstName}
            {...formik.getFieldProps("firstName")}
          />
          <TextField
            label="Last Name"
            name="lastName"
            type="text"
            id="last-name"
            required
            error={
              formik.touched.lastName && formik.errors.lastName ? true : false
            }
            helperText={formik.errors.lastName}
            {...formik.getFieldProps("lastName")}
          />
          <TextField
            label="Company Name"
            name="companyName"
            type="text"
            id="company-name"
            required
            onChange={formik.handleChange}
            error={
              formik.touched.companyName && formik.errors.companyName
                ? true
                : false
            }
            helperText={formik.errors.companyName}
            {...formik.getFieldProps("companyName")}
          />
          <TextField
            label="Job Title"
            name="title"
            type="text"
            id="title"
            required
            onChange={formik.handleChange}
            error={formik.touched.title && formik.errors.title ? true : false}
            helperText={formik.errors.title}
            {...formik.getFieldProps("title")}
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            id="email"
            required
            error={formik.touched.email && formik.errors.email ? true : false}
            helperText={formik.errors.email}
            {...formik.getFieldProps("email")}
          />
          <TextField
            label="Confirm Email"
            name="confirmEmail"
            type="email"
            id="email-confirm"
            required
            error={
              formik.touched.confirmEmail && formik.errors.confirmEmail
                ? true
                : false
            }
            helperText={formik.errors.confirmEmail}
            {...formik.getFieldProps("confirmEmail")}
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            id="password"
            required
            error={
              formik.touched.password && formik.errors.password ? true : false
            }
            helperText={formik.errors.password}
            {...formik.getFieldProps("password")}
          />
          <TextField
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            id="password"
            required
            error={
              formik.touched.confirmPassword && formik.errors.confirmPassword
                ? true
                : false
            }
            helperText={formik.errors.confirmPassword}
            {...formik.getFieldProps("confirmPassword")}
          />
          <Button
            type="submit"
            className={classes.submit}
            fullWidth
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
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
  };
};

export default connect(mapStateToProps, { signUp })(SignupForm);

/*
signUp(signUpInfo)
        .then(res => {
          History.push(props.history)
          cookies.set("entDeviceToken", res.data.token, { path: "/dashboard" });
          //TODO: Once completed, push user to dashboard

*/
