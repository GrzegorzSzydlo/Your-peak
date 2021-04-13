import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import MountainDescription from "./MountainDescription";
import axios from "axios";



function MountainList() {

    const [mountains, setMountains] = useState([]);
    const api = axios.create({
        baseURL: `http://localhost:8080`})

    useEffect(() =>{
        api.get('/mountains').then(response => response.data)
            .then(data => setMountains(data))
        console.log(mountains);
    },[])

    return (
        <div className="container">

            <div className="row">
                {
                    mountains.map(mountain => (

                        <MountainDescription mountain={mountain}/>

                    ))
                }

            </div>
        </div>
    )
}
const Styles = styled.div`

`;

export default MountainList;