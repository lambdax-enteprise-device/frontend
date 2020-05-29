import React from 'react'
import { connect } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import { resetPass } from '../../actions/auth'
import { Typography } from '@material-ui/core';


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

const ForgotPassword = (props) => {
  console.log(props)
  const classes = useStyles()
  const formik = useFormik({
    initialValues: {
      email: '',

    },
    validateOnChange: false,
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")

    }),
    onSubmit: (values) => {
      props.
        resetPass(values)




    },
  })
  const { messageFromServer } = props


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Paper className={classes.paper}>
        <Typography component="h1" variant="h5">
          Reset Password
            </Typography>
        <form
          className={classes.form}
          onSubmit={formik.handleSubmit}
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            type="email"
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={formik.handleChange}
            helperText={formik.errors.email}
            {...formik.getFieldProps("email")}


          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Reset Password
                </Button>
          <div>{messageFromServer.url != null ? "Success!!! A password reset link has been sent to your email" : messageFromServer}</div>
        </form>
      </Paper>
    </Container>
  )
}
const mapStateToProps = (state) => {
  return {
    isResetPassword: state.authReducer.isResetPassword,
    showError: state.authReducer.showError,
    messageFromServer: state.authReducer.messageFromServer
  }
}
export default connect(mapStateToProps, { resetPass })(ForgotPassword)