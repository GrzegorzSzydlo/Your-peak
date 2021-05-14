import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Registration from "./Registration";


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
                <div className='create-account'>
                    <Link to='/login'>
                        <button>Your account was created succesfully</button>
                    </Link>
                </div>
            )}

        </>
    );

};
export  default CreateAccountSuccess;
