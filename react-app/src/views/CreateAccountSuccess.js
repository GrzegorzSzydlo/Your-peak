import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Registration from "./Registration";
import styled from "styled-components";

const Styles = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
`;

const CreateAccountSuccess = () => {

    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }

    return (
        <>
            {!isSubmitted ? (
                <Registration submitForm={submitForm} />
            ) : (
                <Styles>
                    <Link to='/loginSuccess'>
                        <button className='btn btn-secondary'>Your account was created succesfully</button>
                    </Link>
                </Styles>
            )}

        </>
    );

};
export  default CreateAccountSuccess;
