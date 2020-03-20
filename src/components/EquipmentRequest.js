import React, { useState } from "react";


const EquipmentRequest = (props) => {
    const [ request , SetRequest ] = useState({name:"",employee:"",email:""})

    const handleChange = (e) => {
        SetRequest({...request, [e.target.name] : e.target.value})
    }

    console.log(request)



    return (
        <div>
            <form>
                <label>
                    Equipment Name
                    <input 
                        type="text"
                        name="name"
                        onChange={handleChange}
                        value={request.name}
                    />
                </label>
                <label>
                    employee Name
                    <input 
                        type="text"
                        name="employee"
                        onChange={handleChange}
                        value={request.employee}
                    />
                </label>
                <label>
                    Email
                    <input 
                        type="email"
                        name="email"
                        onChange={handleChange}
                        value={request.email}
                    />
                </label>
                
            </form>
        </div>
    )
}

export default EquipmentRequest;