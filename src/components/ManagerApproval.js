import React from 'react';


const ManagerApproval = () => {

    //Function takes in an array of pending requests from a different component (from props)...adds it to its own array, can manipulate each request if needed...then displays it.
    const requestList = (pendingRequests) => {        
        let requests = [];
        for (let i = 0; i < pendingRequests.length; i++) {
            requests.push(pendingRequests[i])
        }

        return requests
    }

    return (
        <>
            <div className="request-list">
                {requestList(['Macbook', 'Blackberry', 'Macbook Air', 'Windows'])}
            </div>

            <form className="approval-form" 
            // submit={}
            >
                <h2>Employee Requests (Pending Manager's Approval) </h2>
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
        </>
    )
}

export default ManagerApproval;