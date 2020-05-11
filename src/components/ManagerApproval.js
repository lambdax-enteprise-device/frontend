import React, {useEffect, useState} from 'react';
import { connect } from "react-redux";
import axios from 'axios';
import { axiosWithAuth } from './utils/axiosWithAuth';


const ManagerApproval = () => {
    const [devices, setDevices] = useState([]);
    const [users, setUsers] = useState([]);

    //Function takes in an array of pending requests from a different component (from props)...adds it to its own array, can manipulate each request if needed...then displays it.
    const requestList = (pendingRequests) => {        
        let requests = [];
        for (let i = 0; i < pendingRequests.length; i++) {
            requests.push(pendingRequests[i])
        }

        return requests
    }

    //Get list of devices, store it in component state
    useEffect(() => {
        axios.get("https://enterprise-devices-testing.herokuapp.com/api/devices")
        .then(res => {
            setDevices(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, [])

    //Get list of users, store it in component state
    useEffect(() => {
        axios.get("https://enterprise-devices-testing.herokuapp.com/api/users")
        .then(res => {
            setUsers(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, [])



    return (
        <div>
            <div className="request-list">
                {requestList(['Macbook', 'Blackberry', 'Macbook Air', 'Windows'])}
            </div>

            <form className="approval-form" 
            // submit={}
            >
                <h2>Employee Requests</h2>
                <h4>(Pending Manager's Approval)</h4>
                <div className="manager-label-section">
                    <label>Device Requested</label>
                    <input type="text"></input>
                </div>

                <div className="manager-label-section">
                    <label>Approved?</label>
                    <input type="checkbox"></input>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {

    };
  };
  
  export default connect(mapStateToProps, {})(ManagerApproval);