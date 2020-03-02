// import React, { useState } from "react";
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

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "15%"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const SignupForm = () => {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
      companyName: "",
      firstName: "",
      lastName: "",
      email: "",
      confirmEmail: ""
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
    }),
    onSubmit: values => {
      console.log(values);
      alert(JSON.stringify(values, null, 2));
    }
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        label="First Name"
        name="firstName"
        type="text"
        id="first-name"
        required
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
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default SignupForm;
