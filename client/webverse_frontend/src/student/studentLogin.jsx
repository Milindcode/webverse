import { useState } from "react"
import usePost from "../utils/usePost";


export default function StudentLogin(){

    const [regno, setRegno] = useState('');
    const [password, setPassword] = useState('');

    const url= "http://localhost:8000/api/v1/student/auth/login";

    const data = {
        regNo: regno,
        password: password
    }

    const handleLoginSubmit = async (e) =>{
        e.preventDefault();
        console.log(data);
        console.log(url);
        const loginData= await usePost(url, data);
        console.log(loginData.token);

        localStorage.setItem('StudentToken', loginData.token);
    }

    return(
        <div>
            <form onSubmit={handleLoginSubmit}>
                <label htmlFor="RegNo">Registration Number:</label>
                <input type="text" id="RegNo" onChange={(e) => {setRegno(e.target.value)}}/>
                <label htmlFor="Password">Password:</label>
                <input type="text" id="Password" onChange={(e) => {setPassword(e.target.value)}}/>

                <button type="submit">Log In</button>
            </form>
        </div>
    )
}