import { useState } from "react"
import usePost from "../utils/usePost";


export default function WardenLogin(){

    const [block, setBlock] = useState('');
    const [password, setPassword] = useState('');

    const url= "http://localhost:8000/api/v1/warden/auth/login";

    const data = {
        block: block,
        password: password
    }

    const handleLoginSubmit = async (e) =>{
        e.preventDefault();
        const loginData= await usePost(url, data);
        console.log(loginData.token);

        localStorage.setItem('WardenToken', loginData.token);
    }

    return(
        <div>
            <form onSubmit={handleLoginSubmit}>
                <label htmlFor="Block">Block:</label>
                <input type="text" id="Block" onChange={(e) => {setBlock(e.target.value)}}/>
                <label htmlFor="Password">Password:</label>
                <input type="text" id="Password" onChange={(e) => {setPassword(e.target.value)}}/>

                <button type="submit">Log In</button>
            </form>
        </div>
    )
}