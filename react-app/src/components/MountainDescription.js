import React, {useState} from 'react';
import styled from "styled-components";
import Rysy from '../img/Rysy.jpg';
import MountainViews from "../views/MountainViews";
import {Link} from "react-router-dom";



function MountainDescription(){
    const [status, setStatus] = useState(false)
    const handleClick = e=> {
        e.preventDefault();
        setStatus(true);
    }

    const changeStatus = e=> {
        setStatus(false);
    }

    return (
        <Styles>
            {(status===false) ? (
            <div className="card">
                <img src={Rysy} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h4 className="card-title">Card title</h4>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                        the card's content.</p>
                    <button className="btn btn-primary"  onClick={handleClick}>
                            Read more

                    </button>
                </div>

            </div>
            ):(
                <MountainViews changeStatus={changeStatus}/>
            )}
        </Styles>
        );
}

const Styles = styled.div`
    padding: 1rem;
    .card{
      width: 18rem;
    }
  img{
      width: 18rem;
      height: 12rem;
  }
`;

export default MountainDescription;