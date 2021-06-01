import React, {useState} from 'react';
import styled from "styled-components";
import {Link, useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux"
import {signin} from "../authorization/ActionAuth";

function Login( ) {
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);
    const history = useHistory();
    const [error, setError] = useState("");
    const [data, setData] = useState({email: "", password: ""});


    const submitFunction = e => {
        e.preventDefault();
        dispatch(signin(data)).then(()=>{
           console.log("Login success");
        });
        if(!auth.register_error)
        {
            setError("Wrong email or password")
        }
    }

        return (
            <LoginWrapper>
                <div className="container d-flex">
                    <div className="row align-content-center justify-content-center">
                        <div className="col-xs-12 col-sm-12 col-md-8 col-lg-6 col-sm-offset-4 col-md-offset-6">
                            <div className="panel panel-default ">
                                <div className="panel-heading pt-3">
                                    <h3 className="panel-title p-3">Login for Your Peak </h3>
                                </div>
                                <div className="panel-body">
                                    <form role="form" onSubmit={submitFunction} className="form d-flex row  align-content-center justify-content-center">

                                        <div className="form-group pt-3">
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                className="form-control input-sm"
                                                onChange={e => setData({...data, email: e.target.value})}
                                                value={data.email}
                                                placeholder="Email Address"
                                                autoComplete="off"
                                                required/>
                                        </div>

                                        <div className="col">
                                            <div className="row-col-xs-6 row-col-sm-6 row-col-md-8  pt-3 pb-3">
                                                <div className="form-group">
                                                    <input
                                                        type="password"
                                                        name="password"
                                                        id="password"
                                                        className="form-control input-sm"
                                                        onChange={e => setData({...data, password: e.target.value})}
                                                        value={data.password}
                                                        placeholder="Password"
                                                        autoComplete="off"
                                                        required/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-center">
                                            <p>{error}</p>
                                        </div>
                                    <div className="row-cols-5 d-flex justify-content-center">

                                        <button type="submit" className="buttonLogin ">
                                            Login
                                        </button>
                                    </div>

                                    </form>
                                </div>
                                <div className="panel-footer">
                                    <div className="row d-flex justify-content-center align-items-center">

                                        <h5 className="col-8 pt-4 d-flex justify-content-center">You don't have an account? </h5>
                                            <Link className="row-cols-4 d-flex justify-content-center align-items-center" to='/registration'>
                                                <button className='buttonRegistration'>
                                                    Registration
                                                </button>
                                            </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </LoginWrapper>
        );
}

export default Login;

const LoginWrapper = styled.div`

  width: 60%;
  
  .buttonLogin, .buttonRegistration {
    width: auto;
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
  }
  a {
    text-decoration: none;
  }
  

`;
