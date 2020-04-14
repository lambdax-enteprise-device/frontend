import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { TextField, Button, FormHelperText, Grid, Container } from "@material-ui/core";

import { makeStyles } from  "@material-ui/core";

const useStyles = makeStyles(theme => ({
    form: {
        display: "flex",
        flexDirection: "column",
        width: "18em",
        
    }
}))

const AddDevice = () => {
    const classes= useStyles();
    const formik = useFormik({
        initialValues: {
            company_id: 1,
            device_type_id: 1,
            location_id: 1,
            manufacturer_id: 1,
            internal_id: "testId",
            serial_number: "testString",
            active: true,
            cost_center: 130
        },
        validationSchema: Yup.object({
            company_id: Yup.number()
            .max(10, "Has to be less than 10")
            .required("Required"),
            device_type_id: Yup.number()
            .max(10, "We only have ten types of devices")
            .required("Required"),
            location_id: Yup.number()
            .max(10, "Must be less than 10")
            .required("Required"),
            internal_id: Yup.string()
            .min(2, "Must be two characters or more")
            .required("Required"),
            serial_number: Yup.string()
            .min(2, "Must be at least two characters")
            .required("Required"),
            active: Yup.boolean()
            .required("Required")
        }),
        onSubmit: values => {
            const {company_id,
            device_type_id,
        location_id,
    manufacturer_id,
internal_id,
serial_number,
active,
cost_center} = values;
        const deviceInfo = {
            company_id: company_id,
            device_type_id: device_type_id,
            location_id: location_id,
            manufacturer_id: manufacturer_id,
            internal_id: internal_id,
            serial_number: serial_number,
            active: active,
            cost_center: cost_center
            }
            alert(JSON.stringify(deviceInfo, null, 2));
            axios.post(
            "http://localhost:4545/api/devices",
            deviceInfo
            )
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
        }
    })
    return (
        <div>
            
                    <Grid
          container
          
          direction='column'
          justify='center'
          alignItems='center'
        >
            <p>Enter your device</p>
            <form onSubmit={formik.handleSubmit} className={classes.form}>
                <TextField
                label="Company ID"
                name="company_id"
                type="text"
                id="company-id"
                required
                onChange={formik.handleChange}
                {...formik.getFieldProps("company_id")} />
                <TextField
                label="Device Type ID"
                name="device_type_id"
                type="text"
                id="device-type-id"
                required
                onChange={formik.handleChange}
                {...formik.getFieldProps("device_type_id")} />
                <TextField
                label="Location Id"
                name="location_id"
                type="text"
                id="location-id"
                required
                onChange={formik.handleChange}
                {...formik.getFieldProps("location_id")}/>
                <TextField
                label="Manufacturer Id"
                name="manufacturer_id"
                type="text"
                id="manufacturer-id"
                required
                onChange={formik.handleChange}
                {...formik.getFieldProps("manufacturer_id")}/>
                <TextField
                label="Internal Id"
                name="internal_id"
                type="text"
                id="internal-id"
                required
                onChange={formik.handleChange}
                {...formik.getFieldProps("internal_id")}/>
                <TextField
                label="Serial Number"
                name="serial_number"
                type="text"
                id="serial-number"
                required
                onChange={formik.handleChange}
                {...formik.getFieldProps("serial_number")}/>
                <TextField
                label="Active"
                name="Active"
                type="text"
                id="active"
                required
                onChange={formik.handleChange}
                {...formik.getFieldProps("active")}/>
                <TextField
                label="Cost Center"
                name="cost_center"
                type="text"
                id="cost-center"
                required
                onChange={formik.handleChange}
                {...formik.getFieldProps("cost_center")}/>
                <Button
                type="submit"
                variant="contained"
                color="primary"
                >Submit</Button>

            </form>
            </Grid>
            
            </div>
    )
}

export default AddDevice;