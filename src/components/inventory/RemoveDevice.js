import React from "react"
import axios from "axios";
import {useFormik} from "formik";
import * as Yup from "yup";
import { TextField, Button, Grid} from "@material-ui/core";

const RemoveDevice = () => {
    const formik = useFormik({
        initialValues: {
            device_id: 1
        },
        validationSchema: Yup.object({
            device_id: Yup.number()
            .min(1, "Has to be at least 1")
            .required("Required")
        }),
        onSubmit: values => {
            const {
                device_id
            } = values;
            const removedDeviceId = {
                device_id: device_id
            }
            alert(JSON.stringify(removedDeviceId.device_id, null, 2));
            axios.delete(`http://localhost:4545/api/devices/${removedDeviceId.device_id}`)
            .then(res => {
                console.log(res)
            })
            .catch(err =>{
                console.log(err)
            })
        }
    })
    return(
        <div>
        <p>Enter the DeviceID you want to remove</p>
        <form onSubmit={formik.handleSubmit}>
            <TextField 
            label="Device ID"
            name="Device ID"
            type="text"
            id="device_id"
            required
            onChange={formik.handleChange}
            {...formik.getFieldProps("device_id")}/>
            <Button
            type="submit"
            variant="contained"
            color="primary"
            >Submit</Button>
        </form>
        </div>

    )
}

export default RemoveDevice