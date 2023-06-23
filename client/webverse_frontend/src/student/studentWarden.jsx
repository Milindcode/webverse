import {useEffect,  useState } from "react";
import useGet from "../utils/useGet";


export default function StudentWarden(){
    const [meWarden, setMeWarden]= useState(null);
    const url= "http://localhost:8000/api/v1/student/me/my-warden";

    const studentToken= localStorage.getItem('StudentToken');

    async function getStudentWarden(){
        const data = await useGet(url, studentToken);
        setMeWarden(data);
        console.log(data);
    }

    useEffect(()=>{
        getStudentWarden();
    }, [])

    return(
        <>
            <h1>Warden Details</h1>
            {meWarden && <h2>Warden Name: {meWarden.data.name}</h2>}
            {meWarden && <h3>Hostel Block: {meWarden.data.block}</h3>  }
        </>
    )
}