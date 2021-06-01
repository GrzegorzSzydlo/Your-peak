import React, {useEffect, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import styled from 'styled-components';
import {useDispatch, useSelector} from "react-redux";
import {signout} from "../authorization/ActionAuth";

import jwt_decode from "jwt-decode";
import Notification from "./Notification";

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
  .name{
    margin: 0;
    color: #bbb;
  }

  .icon {
    width: 2rem;
    margin-left: 1rem;
  }

  a {
    text-decoration: none;
  }
  
  .notification{
    z-index: 5
  }
`;

export default function NavigationBar() {

    const auth = useSelector(state => state.auth);
    const history = useHistory();
    const dispatch = useDispatch();

    const [statusLogaut,setStatusLogaut] = useState(false)


    function handleLogout() {
        dispatch(signout()).then(() => {
            history.replace("/addCardMountain");
        });
        setStatusLogaut(true);
        setDecode({role: "NULL", name: "NULL"})
    }



    const [decode, setDecode] = useState({role: "NULL", name: "NULL"});
    useEffect(() => {
        if (auth.login) {
            const token = localStorage.getItem('token');
            setDecode(jwt_decode(token));
        }
    }, [auth.login,statusLogaut]);


    return (

        <Styles>
            <div className="navbar navbar-expand">
                <div className="navbar-brand">
                    <Link to="/">
                        Your Peak <i className="fas fa-mountain"/>
                    </Link>
                </div>

                <div className="navbar-toggle" aria-controls="basic-navbar-nav"/>
                <div className="navbar-collapse" id="basic-navbar-nav">

                    <ul className="nav ml-auto">
                        {(decode.name!=="NULL")?(
                            <li className="nav-item">
                                <a className="nav-link">{decode.name}</a>
                            </li>

                        ):null}
                        {(decode.role ==="ADMIN")?(
                            <div className="d-flex ">
                                <li className="nav-item">
                                    <a className="nav-link text-danger"> {decode.role}</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">
                                        <Link to="/addCardMountain">Add mountains</Link>
                                    </a>
                                </li>
                            </div>


                        ):null}

                        <li className="nav-item">
                            <a className="nav-link">
                                <Link to="/">Home</Link>
                            </a>
                        </li>

                        {(auth.login) ? (
                            <li className="nav-item" onClick={handleLogout}>
                                <a className="nav-link">
                                    <Link to="/">Log out</Link>
                                </a>
                            </li>

                        ) : (
                            <li className="nav-item">
                                <a className="nav-link">
                                    <Link to="/loginSuccess">Sign In</Link>
                                </a>
                            </li>

                        )}
                    </ul>
                </div>
            </div>
            <Notification />
        </Styles>
    )
}
