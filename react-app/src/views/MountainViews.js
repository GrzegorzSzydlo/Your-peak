import React, {useEffect} from "react";


function MountainViews ({changeStatus}) {

    useEffect(() =>{


    })

    const handleClick = e=> {
        e.preventDefault();
        changeStatus();
    }
    return(
    <div>
        <button onClick={handleClick}>
            back </button>
    </div>

    )
}

export default MountainViews;