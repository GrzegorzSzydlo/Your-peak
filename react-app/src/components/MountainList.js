import React, {useState} from 'react';
import styled from "styled-components";
import MountainDescription from "./MountainDescription";

import MountainViews from "../views/MountainViews";


function MountainList({mountainAll, changeDeleteStatus}) {

    const [details, setDetails] = useState([]);
    const [status, setStatus] = useState(false);

    function changeStatusOnFalse() {
        setStatus(false);
    }

    function changeStatusOnTrue() {
        setStatus(true);
    }

    function changeDelete(id){
        const index = mountainAll.findIndex(m => m.id ===id);
        delete mountainAll[index];
        changeDeleteStatus(index);

    }


    return (
        <Styles>

            <div className="container">
                {(status === false) ? (
                    <div className="row">
                        {
                            mountainAll.map(mountain => (
                                <MountainDescription mountain={mountain} changeStatusOnTrue={changeStatusOnTrue}
                                                     setDetails={setDetails} />
                            ))
                        }
                    </div>
                ) : (
                    <MountainViews changeStatusOnFalse={changeStatusOnFalse} details={details} changeDelete={changeDelete}/>
                )}
            </div>
        </Styles>
    )
}

const Styles = styled.div`

`;

export default MountainList;