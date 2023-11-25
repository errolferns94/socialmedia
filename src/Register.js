import React from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';


const { useState } = require("react")

const Register = () =>{
    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [age, setAge] = useState()
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState()
    const [password, setPassword] = useState("")
    const [userid, setUserid] = useState();

    const handleClick = () =>{
        const userDetails = [ username, age, email, phone, password,userid ];

        axios.post('http://localhost:5000/api/createUser', userDetails)
        .then(res=>navigate("/register"))
        .then(result=>(result.data))
        .catch(err=>console.log(err))
    }

    return(
        <div>
            <h1>WELCOME TO REGISTER</h1>
            <label>Enter Username</label>
            <input type="text" onChange={e=> setUsername(e.target.value)}/>
            <br/>
            <label>Enter Age</label>
            <input type="number" onChange={e=>setAge(e.target.value)}/>
            <br/>
            <label>Enter Email</label>
            <input type="email" onChange={e=>setEmail(e.target.value)}/>
            <br/>
            <label>Enter Phone</label>
            <input type="number" onChange={e=>setPhone(e.target.value)}/>
            <br/>
            <label>Enter Password</label>
            <input type="password" onChange={e=>setPassword(e.target.value)}/>
            <br/>
            <label>Enter the id</label>
            <input type="number" onChange={e=>setUserid(e.target.value)}/>
            <br/>
            <button onClick={handleClick}>Register</button>
        </div>
    )
}

export default Register;