import React from 'react';
import {Link} from 'react-router-dom';

import Login from "./Login";
import {useSelector} from "react-redux";
import styled from "styled-components";

const Styles = styled.div`
  
  width: 100%;
  height: 100%;
  
  .signing-section{
    display: flex;
    justify-content: center;
    margin-top: 5rem;
  }
`;


const LoginSuccess = () => {

    const auth = useSelector(state => state.auth);
    return (
        <Styles>
            <div className='signing-section'>
                {auth.login ? (
                    <Link to='/'>
                        <button className='btn btn-secondary'>You are logged in!</button>
                    </Link>
                ) : (
                    <Login/>
                )}
            </div>
        </Styles>
    )
}
export default LoginSuccess;
