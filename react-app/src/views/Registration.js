import React from 'react';
import styled from "styled-components";

import ServiceRegistration from '../service/ServiceRegistration';
import validate from '../components/validate';

function Registration ({submitForm}) {

    const {handleChange, handleSubmit, values, errors} = ServiceRegistration(submitForm, validate);


        return (
            <RegistrationWrapper>
                <div className="container d-flex ">
                    <div className="row align-content-center justify-content-center">
                        <div className="col-xs-12 col-sm-10 col-md-6 col-sm-offset-4 col-md-offset-6 m-lg-5">
                            <div className="panel panel-default ">
                                <div className="panel-heading">
                                    <h4 className="panel-title pt-4">Please sign up for Your Peak </h4>
                                </div>
                                <div className="panel-body">
                                    <form role="form" onSubmit={handleSubmit}>
                                        <div className="col">
                                            <div className="row-col-xs-6 row-col-sm-6 row-col-md-6 pt-3">
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        name="username"
                                                        id="username"
                                                        className="form-control input-sm"
                                                        placeholder="Username"
                                                        value={values.username}
                                                        onChange={handleChange}
                                                        autoComplete="off"
                                                        required/>

                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-group pt-3">
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                className="form-control input-sm"
                                                placeholder="Email Address"
                                                value={values.email}
                                                onChange={handleChange}
                                                autoComplete="off"
                                                required/>
                                            {errors.email && <p>{errors.email}</p>}
                                        </div>

                                        <div className="col">
                                            <div className="row-col-xs-6 row-col-sm-6 row-col-md-6 pt-3">
                                                <div className="form-group">
                                                    <input
                                                        type="password"
                                                        name="password"
                                                        id="password"
                                                        className="form-control input-sm"
                                                        placeholder="Password"
                                                        value={values.password}
                                                        onChange={handleChange}
                                                        required/>
                                                    {errors.password && <p>{errors.password}</p>}
                                                </div>
                                            </div>
                                            <div className="row-col-xs-6 row-col-sm-6 row-col-md-6 pt-3 pb-3">
                                                <div className="form-group">
                                                    <input
                                                        type="password"
                                                        name="confirmPassword"
                                                        id="confirmPassword"
                                                        className="form-control input-sm"
                                                        placeholder="Confirm Password"
                                                        value={values.confirmPassword}
                                                        onChange={handleChange}
                                                        required/>
                                                    {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row-cols-4 d-flex justify-content-center">
                                            <button type="submit" className="buttonRegistration">
                                                Register
                                            </button>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </RegistrationWrapper>
        );
}
export default Registration;

const RegistrationWrapper = styled.div`


    .buttonRegistration {
    text-transform: capitalize;
    font-size: medium;
    background: rgba(192, 202, 245,0.6);
    border: 0.1rem solid;
    border-radius: 0.4rem;
    padding: 0.2rem 0.5rem;
    transition: 0.5s ease-in-out;

    &:hover {
      background: cornflowerblue;
    }

`;