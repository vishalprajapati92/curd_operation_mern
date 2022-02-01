import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const history = useNavigate();
    const [user, setUser ] = useState({
        email : '',
        password: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }


    return (
        <div> 
            <h1> Login Page </h1>
            <input type="text" name="email" onChange={ handleChange } placeholder="Enter email" />
            <input type="text" name="password" onChange={ handleChange } placeholder="Enter password" />
            <button type="button">Login </button> <br/>
            <button type="button" onClick={ () => history('/register')}> Register</button> 
        </div>
    )
}

export default Login;