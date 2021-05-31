import React from 'react';
import {Link} from 'react-router-dom';

import Login from "./Login";
import { useSelector} from "react-redux";

const LoginSuccess = () => {

    const auth = useSelector(state => state.auth);
    return (
        <div className='signin-section'>
            {auth.login ? (
                <Link to='/'>
                    <button className='button-welcome'>You are logged in!</button>
                </Link>
            ) : (
                <Login />
            )}
        </div>
    )
}
export  default LoginSuccess;
