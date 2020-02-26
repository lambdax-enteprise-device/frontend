import React from "react";
import { withFormik, Field, Form } from "formik";
import * as Yup from "yup";
import axiosWithAuth from "../utils/axiosWithAuth";

function LoginForm({ values, errors, touched, isSubmitting }) {
  return (
    <Form>
      <h1>
        Welcome to the Login form
      </h1>
      <label>Please enter your username</label>
      <Field name="username" type="text" />
      {touched.username && errors.username && (
        <p>You must forgotten something. {errors.username}</p>
      )}
      <label> Please enter your password</label>
      <Field name="password" type="password" />
      {touched.password && errors.password && (
        <p>You must forgotten something. {errors.password}</p>
      )}
      <button className="loginButton" type="submit">Submit</button>
    </Form>
  );
}

const FormikLoginForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string()
      .required("A Login name is required")
      .min(4, "A username must be at least 4 characters long"),
    password: Yup.string()
      .min(4, "A password must be at leat 4 characters long")
      .required("A password is required to continue")
  }),


  handleSubmit(values, { resetForm, setErrors, props }) {
    axiosWithAuth()
      .post("URL here", values)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        resetForm();
        props.history.push("/home");
      })
      .catch(rej => {
        // console.log(rej);
        //props.history.push("/");
      });
  }
})(LoginForm);

export default FormikLoginForm;