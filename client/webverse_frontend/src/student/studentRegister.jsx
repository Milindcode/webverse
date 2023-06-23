import { useState } from "react";
import usePost from "../utils/usePost";


export default function StudentRegister(){

    const [fullname, setFullname]= useState('');
    const [regno, setRegno]= useState('');
    const [block, setBlock]= useState('');
    const [password, setPassword]= useState('');
    const [roomno, setRoomno]= useState('');

    const url= "http://localhost:8000/api/v1/student/auth/register"

    let data = {
        name: fullname,
        regNo: regno,
        block: block,
        password: password, 
        roomNo: roomno
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
                <label htmlFor="RegNo">Registration Number:</label>
                <input type="text" id="RegNo" onChange={(e) => {setRegno(e.target.value)}}/>
                <label htmlFor="Block">Hostel Block:</label>
                <input type="text" id= "Block" onChange={(e) => {setBlock(e.target.value)}}/>
                <label htmlFor="Password">Password:</label>
                <input type="text" id="Password" onChange={(e) => {setPassword(e.target.value)}}/>
                <label htmlFor="RoomNo">Room Number: </label>
                <input type="text" id="RoomNo" onChange={(e) => {setRoomno(e.target.value)}}/>

                <button type="submit">Sign In</button>
            </form>
        </div>
    )
}