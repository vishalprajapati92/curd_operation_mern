import React, { useState } from "react";
import axios from 'axios';
import { useNavigate  } from "react-router-dom";

const Register = () => {

    const navigation = useNavigate();
    
    const [ user, setUser ] = useState({
        name: '',
        email: '',
        password: '',
        reEnterPassword: ''
    })

    const handleChange =  e => {
        const { name, value } = e.target;
        setUser ({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { name, email, password } = user;
        axios.post('http://localhost:8002/register', user).then( res => console.log(res));
    }

    return (
        <div>
            <h1> Register </h1>
            Name : <input type="text" name="name" value={user.name} placeholder="Enter Name" onChange={handleChange}/> <br />
            Email: <input type="text" name="email" value={user.email} placeholder="Email" onChange={handleChange} />  <br />
            Password: <input type="password" name="password" value={user.password} placeholder="Enter password" onChange={handleChange} /> <br />
            Confirm-password <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter password" onChange={handleChange} /> <br />
            <button type="button" onClick={register}> Register </button>
            <div> or </div>
            <button type="button" onClick={() => navigation('/login')} > Login </button>
        </div>
    );
}

export default Register;