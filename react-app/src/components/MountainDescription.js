import React from 'react';
import styled from "styled-components";


function MountainDescription({mountain, changeStatusOnTrue, setDetails}){

    const handleClick = e=> {
        e.preventDefault();

        setDetails(mountain);
        changeStatusOnTrue();
    }

    return (

        <Styles key={mountain.id} className="col-lg-3">
                    <div className="card" >
                        <img id={mountain.id} src={mountain.image} className="card-img-top " alt={mountain.name}  />
                        <div className="card-body">
                            <h4 className="card-title">{mountain.name}</h4>
                            <p className="card-text text-truncate">{mountain.description}</p>
                            <button className="btn btn-primary"  onClick={handleClick}>
                                    Read more
                            </button>
                        </div>

                    </div>
        </Styles>
        );
}

const Styles = styled.div`
  
    padding: 1rem;
  .card-img-top{
    height: 12rem;
    object-fit: cover;
  }
`;

export default MountainDescription;