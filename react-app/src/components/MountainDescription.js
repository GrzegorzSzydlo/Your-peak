import React, {useState} from 'react';
import styled from "styled-components";
import MountainViews from "../views/MountainViews";


function MountainDescription({mountain}){
    const [status, setStatus] = useState(false)
    const handleClick = e=> {
        e.preventDefault();
        setStatus(true);
    }

    function changeStatus(){
        setStatus(false);
    }


    return (
        <Styles className= {status ? "col-lg-offset-10 mx-auto" : "col-4 mx-auto"}>

            {(status===false) ? (
                    <div className="card">
                        <img src={mountain.image} className="card-img-top" alt={mountain.name} />
                        <div className="card-body">
                            <h4 className="card-title">{mountain.name}</h4>
                            <p className="card-text">{mountain.description}</p>
                            <button className="btn btn-primary"  onClick={handleClick}>
                                    Read more
                            </button>
                        </div>

                    </div>

            ):(
                <MountainViews changeStatus={changeStatus} mountain={mountain}/>
            )}

        </Styles>
        );
}

const Styles = styled.div`
  
    //width: {$props => props.status === true ? "20rem": "80%"};
    padding: 1rem;
  .card-img-top{
      width: 18rem;
      height: 12rem;
  }
`;

export default MountainDescription;