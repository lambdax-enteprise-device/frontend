import React from "react";
import { withFormik, Field, Form } from "formik";
import * as Yup from "yup";
import axiosWithAuth from "../utils/axiosWithAuth";

function RegistrationForm({ values, errors, touched, isSubmitting }) {
  return (
    <Form>
      <h1>Welcome to the Registration form</h1>
      <label>Please enter your username</label>
      <Field name="username" type="text" />
      {touched.username && errors.username && <p>Sorry! {errors.username}</p>}
      <label> Please enter your password</label>
      <Field name="password" type="password" />
      {touched.password && errors.password && <p>Sorry! {errors.password}</p>}
      <button className="loginButton" type="submit">Submit</button>
    </Form>
  );
}

const FormikRegistrationForm = withFormik({
  mapPropsToValues({ username, password, email }) {
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
        resetForm();
        props.history.push("/login");
      })
      .catch(reject => {
        //  console.log("axios post rejection");
        //console.log(reject);
      });
  }
})(RegistrationForm);

export default FormikRegistrationForm;