import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

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

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "15%"
  },
  form: {
    // width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const SignupForm = () => {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      password: "12345678",
      confirmPassword: "12345678",
      companyName: "My Company",
      firstName: "Joel",
      lastName: "Perez",
      email: "joel@joelperez.dev",
      confirmEmail: "joel@joelperez.dev"
    },
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
      firstName: Yup.string()
        .max(120, "Must be 120 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(120, "Must be 120 characters or less")
        .required("Required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Required"),
      confirmEmail: Yup.string()
        .email("Invalid email address")
        .required("Required")
        .oneOf([Yup.ref("email"), null], "Email addresses must match")
      // TODO: Require complex passwords
    }),
    // TODO: Update to only validate during onBlur events
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      console.log(values);
      axios
        .post(
          "https://enterprise-devices.herokuapp.com/api/auth/signup",
          values
        )
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
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
            {...formik.getFieldProps("firstName")}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div>{formik.errors.firstName}</div>
          ) : null}
          {/* <label htmlFor="lastName">Last Name</label> */}
          <TextField
            label="Last Name"
            name="lastName"
            type="text"
            id="last-name"
            required
            {...formik.getFieldProps("lastName")}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div>{formik.errors.lastName}</div>
          ) : null}
          <TextField
            label="Company Name"
            name="companyName"
            type="text"
            id="company-name"
            required
            onChange={formik.handleChange}
            {...formik.getFieldProps("companyName")}
          />

          <TextField
            label="Email"
            name="email"
            type="email"
            id="email"
            required
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}

          <TextField
            label="Confirm Email"
            name="confirmEmail"
            type="email"
            id="email-confirm"
            required
            {...formik.getFieldProps("confirmEmail")}
          />
          {formik.touched.confirmEmail && formik.errors.confirmEmail ? (
            <div>{formik.errors.confirmEmail}</div>
          ) : null}

          <TextField
            label="Password"
            name="password"
            type="password"
            id="password"
            required
            {...formik.getFieldProps("password")}
          />
          {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null}

          <TextField
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            id="password"
            required
            {...formik.getFieldProps("confirmPassword")}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <div>{formik.errors.confirmPassword}</div>
          ) : null}
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

export default SignupForm;
