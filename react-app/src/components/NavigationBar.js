import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Search from './Search';
import logo from "../logo.svg";

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

export const NavigationBar = () => (
    <Styles>
        <div className="navbar navbar-expand-lg">
            <div className="navbar-brand"> 
                <Link to = "/" >
                Your Peak <img className="icon" src={logo}  alt="Logo"/>
                </Link>
            </div>
            
            <div className="navbar-toggle" aria-controls="basic-navbar-nav" />
            <div className="navbar-collapse" id="basic-navbar-nav">
                <Search />
                <ul className="nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link">
                            <Link to="/">Home</Link>
                        </a>
                    </li>
                    {/*<li className="nav-item">*/}
                    {/*    <a className="nav-link">*/}
                    {/*        <Link to="/about">About</Link>*/}
                    {/*    </a>*/}
                    {/*</li>*/}
                    {/*<li className="nav-item">*/}
                    {/*    <a className="nav-link">*/}
                    {/*        <Link to="/contact">Contact</Link>*/}
                    {/*    </a>*/}
                    {/*</li>*/}
                    <li className="nav-item">
                        <a className="nav-link">
                            <Link to="/loginSuccess">Sign In</Link>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </Styles >
)