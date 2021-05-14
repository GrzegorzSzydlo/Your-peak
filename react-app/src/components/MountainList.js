import React, {useState} from 'react';
import styled from "styled-components";
import MountainDescription from "./MountainDescription";

import MountainViews from "../views/MountainViews";


function MountainList({mountainAll}) {

    const [details, setDetails] = useState([]);
    const [status, setStatus] = useState(false);


    function changeStatusOnFalse() {
        setStatus(false);
    }

    function changeStatusOnTrue() {
        setStatus(true);
    }


    return (
        <Styles>

            <div className="container">
                {(status === false) ? (
                    <div className="row">
                        {
                            mountainAll.map(mountain => (
                                <MountainDescription mountain={mountain} changeStatusOnTrue={changeStatusOnTrue}
                                                     setDetails={setDetails}/>
                            ))
                        }
                    </div>
                ) : (
                    <MountainViews changeStatusOnFalse={changeStatusOnFalse} details={details}/>
                )}
            </div>
        </Styles>
    )
}

const Styles = styled.div`

`;

export default MountainList;