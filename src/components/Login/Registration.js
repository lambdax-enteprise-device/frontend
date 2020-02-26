import React from "react";
import FormikRegistrationForm from "./FormikRegistration"
// import axiosWithAuth from "../Security/axiosWithAuth";

// Route = /registration

function Registration(props) {

    return (
<div>

      <FormikRegistrationForm {...props} />
      </div>
    )
}

export default Registration