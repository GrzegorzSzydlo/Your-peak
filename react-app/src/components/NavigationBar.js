import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import styled from 'styled-components';
import logo from "../logo.svg";
import {useDispatch, useSelector} from "react-redux";
import {signout} from "../authorization/ActionAuth";

const Styles = styled.div`
  .navbar {
    background-color: #325;
    padding: 0.3rem 2rem;
  }
  a, .navbar-brand, .navbar-nav .nav-link {
    color: #bbb;
    &:hover {
      color: white;
      
    }
  }
  .icon{
      width: 2rem;
      margin-left: 1rem;
  }
   a {
    text-decoration: none;
  }
`;

export default function NavigationBar() {

    const auth = useSelector(state => state.auth);
    const history = useHistory();
    const dispatch = useDispatch();


    function handleLogout() {
        dispatch(signout()).then(() => {
            history.replace("/");
        });
    }

    return (

        <Styles>
            <div className="navbar navbar-expand-lg">
                <div className="navbar-brand">
                    <Link to = "/" >
                        Your Peak <img className="icon" src={logo}  alt="Logo"/>
                    </Link>
                </div>

                <div className="navbar-toggle" aria-controls="basic-navbar-nav" />
                <div className="navbar-collapse" id="basic-navbar-nav">

                    <ul className="nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link">
                                <Link to="/">Home</Link>
                            </a>
                        </li>

                        {(auth.login)?(
                            <li className="nav-item" onClick={handleLogout}>
                                <a className="nav-link">
                                    <Link to="/">Log out</Link>
                                </a>
                            </li>

                        ):(
                            <li className="nav-item">
                                <a className="nav-link">
                                    <Link to="/loginSuccess">Sign In</Link>
                                </a>
                            </li>

                        )}
                    </ul>
                </div>
            </div>
        </Styles >
    )
}
