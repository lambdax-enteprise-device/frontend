import React, { useState } from "react";
import "./equipmentRequest.scss"


const EquipmentRequest = (props) => {
    const [ request , SetRequest ] = useState({request_id:"",device_id:""})

    const handleChange = (e) => {
        SetRequest({...request, [e.target.name] : e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("oh yeahhh")
    }

    console.log(request)



    return (
        <div>
            <h2>Request Items</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Request ID
                    <input 
                        type="number"
                        name="request_id"
                        onChange={handleChange}
                        value={request.name}
                    />
                </label>
                <label>
                    Device ID
                    <input 
                        type="number"
                        name="device_id"
                        onChange={handleChange}
                        value={request.employee}
                    />
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default EquipmentRequest;