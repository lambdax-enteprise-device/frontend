import React from "react";
import FormikLoginForm from "./FormikLogin"

// import axiosWithAuth from "../utils/AxiosWithAuth";

// Route = /login

function Login(props) {
  return (
    <div>
      <FormikLoginForm {...props} />
    </div>
  );
}

export default Login;
