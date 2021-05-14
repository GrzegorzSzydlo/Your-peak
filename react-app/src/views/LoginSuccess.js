import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Login from "./Login";

const LoginSuccess = details => {
    const api = axios.create({
        baseURL: `http://localhost:8080`
    })

    const [user, setUser] = useState({email: ""});
    const [error, setError] = useState("");

    const LoggedSuccessfully = details => {


        if(details !== ""){
            console.log(details.email);
            setUser({
                email: details.email
            });
        } else{
            setError("Wrong email or password!")
        }
    }

    return (
        <div className='signin-section'>
            {(user.email !== "") ? (
                <Link to='/'>
                    <button className='button-welcome'>You are logged in!</button>
                </Link>
            ) : (
                <Login LoggedSuccessfully={LoggedSuccessfully} error={error}/>
            )}
        </div>
    )
}
export  default LoginSuccess;