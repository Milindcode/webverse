import { useState } from "react";
import usePost from "../utils/usePost";


export default function FacultyRegister(){

    const [fullname, setFullname]= useState('');
    const [empid, setEmpid]= useState('');
    const [password, setPassword]= useState('');
    const [isHod, setIsHod]= useState(false);

    const url= "http://localhost:8000/api/v1/faculty/auth/register"

    let data = {
        name: fullname,
        empId: empid,
        password: password, 
        isHOD: isHod
    }

    async function postData(url, data){
        let resData= await usePost(url, data);
        return resData;
    }
    const handleRegisterSubmit= async (e) => {
        e.preventDefault();
        console.log(data);
        let responseData= await postData(url, data);

        console.log(responseData);
    }

    

    return(
        <div>
            <form onSubmit={handleRegisterSubmit}>
                <label htmlFor="FullName">Full Name:</label>
                <input type="text" id="FullName" onChange={(e) => {setFullname(e.target.value)}}/>
                <label htmlFor="EmpId">Employee ID:</label>
                <input type="text" id="EmpId" onChange={(e) => {setEmpid(e.target.value)}}/>
                <label htmlFor="Password">Password:</label>
                <input type="text" id="Password" onChange={(e) => {setPassword(e.target.value)}}/>
                <label htmlFor="isHod">isHOD: </label>
                <input type="checkbox" id="isHod" onChange={(e) => {setIsHod(!isHod)}}/>

                <button type="submit">Sign In</button>
            </form>
        </div>
    )
}