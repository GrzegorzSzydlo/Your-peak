import React, {useState} from "react";
import styled from "styled-components";


function MountainViews({changeStatusOnFalse, details}) {

    const {id, name, description, height, range, image} = details;

    const handleClick = e => {
        e.preventDefault();
        changeStatusOnFalse();
    }
    return (
        <Styles key={id} className=" text-center pt-2">

            <div className="col-11 ">
                <div className="row justify-content-end my-2">
                    <button className="col-2 btn-primary " onClick={handleClick}>
                        back
                    </button>
                </div>
                <div className="row ">
                    <div className="col-6">
                        <img src={image} alt="..." className=" img-fluid rounded"/>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <h2>{name}</h2>
                        </div>

                        <div className="row my-2" >
                            <h4 className="col-6">Pasmo górskie : </h4>
                            <p className="col-6">{range}</p>
                        </div>

                        <div className="row my-2" >
                            <h4 className="col-6">Wysokość : </h4>
                            <p className="col-6">{height}</p>
                        </div>
                        <div className="row">
                            <div>
                                <h4>Description</h4>
                                <label className="lh-sm ">{description}</label>
                            </div>

                        </div>
                    </div>
                </div>


            </div>

        </Styles>
    )
}

const Styles = styled.div`

  font-family: 'Lobster', cursive;
  .img-fluid {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
`;

export default MountainViews;