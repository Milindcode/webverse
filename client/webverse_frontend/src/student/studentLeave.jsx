import {useEffect,  useState } from "react";
import useGet from "../utils/useGet";


export default function StudentLeave(){
    const [leaves, setLeaves]= useState([]);
    const [addleave, setAddleave]= useState(false);
    const [leavetype, setLeavetype]= useState("");
    const [leavedate, setLeavedate]= useState("");
    const [leavetime, setLeavetime]= useState("");
    const [duration, setDuration]= useState("");



    const url= "http://localhost:8000/api/v1/student/leave";


    const studentToken= localStorage.getItem('StudentToken');

    async function getStudentLeave(){
        const data = await useGet(url, studentToken);
        setLeaves(data);
        console.log(data);
    }

    useEffect(()=>{
        getStudentLeave();
    }, [])


    function handleAddleave(){
        setAddleave(!addleave);
    }

    const data= {
        leaveType: leavetype,
        leaveDate: leavedate,
        leaveTime: leavetime,
        leaveDuration: duration
      }

    
    async function handleLeaveSubmit(){
        const res = await fetch(url, {
            method: 'POST', 
            body: JSON.stringify(data),
            headers: {
              'Authorization': `Bearer ${studentToken}`,
              'Content-Type': 'application/json'
            }
          })
        const resJson= await res.json();
        console.log(resJson);

        setAddleave(false);
    }

    console.log(leaves.type);
    return(
        <>
            <h1>Leave Page</h1>
            <button onClick={handleAddleave}>Add Leave</button>

            {addleave && <div>
                <form onSubmit={handleLeaveSubmit}>
                <label htmlFor="LeaveType">Leave Type:</label>
                <input type="text" id="LeaveType" onChange={(e) => {setLeavetype(e.target.value)}}/>

                <label htmlFor="LeaveDate">Leave Date:</label>
                <input type="text" id="LeaveDate" onChange={(e) => {setLeavedate(e.target.value)}}/>

                <label htmlFor="LeaveTime">Leave Time: </label>
                <input type="text" id= "LeaveTime" onChange={(e) => {setLeavetime(e.target.value)}}/>

                <label htmlFor="duration">Duration: </label>
                <input type="text" id="duration" onChange={(e) => {setDuration(e.target.value)}}/>

                <button type="submit">Apply Leave</button>
                </form>
            </div> }
            <h1>Leaves: </h1>
            {leaves && leaves.map((leave) =>{
                <div key= {leave.data.id} >
                    <h5>Leave Type: {leave.data.leaveType}</h5>
                    <h5>Leave Date: {leave.data.leaveType}</h5>
                    <h5>Leave Time: {leave.data.leaveType}</h5>
                    <h5>Leave Duration: {leave.data.leaveType}</h5>
                    <h5>Leave Approval Status: {leave.data.leaveType}</h5>
                </div>
            })}
        </>
    )
}