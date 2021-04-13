import React, {useState} from "react";
import styled from "styled-components";


function MountainViews ({changeStatus, mountain}) {

     const {id, name,description,height,range, image} = mountain;

    const handleClick = e=> {
        e.preventDefault();
        changeStatus();
    }
    return(
    <Styles className="col-12 d-flex justify-content-center">
        <div key={id} className=" col-7 ">
            <img src={image}  alt="..." className="col-12"/>
            <h2>{name}</h2>
            <div>
                <h4>Wysokość : </h4>
                    <p>{height}</p>
            </div>
            <div>
                <h4>Description</h4>
                <label>{description}</label>
            </div>


            <button onClick={handleClick}>
                back </button>
        </div>

    </Styles>
    )
}

const Styles = styled.div`

`;

export default MountainViews;