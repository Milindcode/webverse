import { useState } from "react"
import usePost from "../utils/usePost";


export default function FacultyLogin(){

    const [empid, setEmpid] = useState('');
    const [password, setPassword] = useState('');

    const url= "http://localhost:8000/api/v1/faculty/auth/login";

    const data = {
        empId: empid,
        password: password
    }

    const handleLoginSubmit = async (e) =>{
        e.preventDefault();
        const loginData= await usePost(url, data);
        console.log(loginData.token);

        localStorage.setItem('token', loginData.token);
    }

    return(
        <div>
            <form onSubmit={handleLoginSubmit}>
                <label htmlFor="EmpId">Employee Id:</label>
                <input type="text" id="EmpId" onChange={(e) => {setEmpid(e.target.value)}}/>
                <label htmlFor="Password">Password:</label>
                <input type="text" id="Password" onChange={(e) => {setPassword(e.target.value)}}/>

                <button type="submit">Log In</button>
            </form>
        </div>
    )
}