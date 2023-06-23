import useGet from "../utils/useGet";
import { useEffect,useState } from "react";


export default function StudentHome(){

    const [meData, setMeData]= useState(null);
    const url= "http://localhost:8000/api/v1/student/me";


    const studentToken= localStorage.getItem('StudentToken');

    async function getStudentData(){
        const data = await useGet(url, studentToken);
        setMeData(data);
        console.log(data);
    }

    useEffect(()=>{
        getStudentData();
    }, [])


    // console.log(studentToken);
    return(
        <div>
            {meData && <h1>{meData.data.name}</h1>}
            {meData && <h2>Registration Number:{meData.data.regNo}</h2>}
            {meData && <h4>Hostel Block: {meData.data.block} Block</h4>}
            {meData && <h4>Mess Type: {meData.data.messType}</h4>}

            <button>Leave Requests</button>
            <button>Warden Details</button>
        </div>
    )
    
}