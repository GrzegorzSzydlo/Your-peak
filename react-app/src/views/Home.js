import React, {useEffect, useState} from 'react';
import Filter from '../components/Filter';
import styled from 'styled-components';
import MountainList from "../components/MountainList";

import axios from "axios";

const api = axios.create({
    baseURL: `http://localhost:8080`
})

export default function Home() {

    const [mountains, setMountains] = useState([]);
    const [mountains2, setMountains2] = useState([]);

    const [status, setStatus] = useState(false);

    const changeStatus = () => {
        setMountains2(mountains)
        setStatus(true);
        console.log(mountains)
    }


    const [searchText, setSearchText] = useState("");
    const [searchTag, setSearchTag] = useState([]);

    console.log(searchTag);

    function search(mounts) {
        const mountainKeys = mounts[0] && Object.keys(mounts[0])
        let filtr1 =  mounts.filter((mountain) =>
            mountainKeys.some((key) => mountain[key].toString().toLowerCase().indexOf(searchText.toLowerCase()) > -1));
        let filtr2 = filtr1.filter((mountain) =>mountain["range"].toString().toLowerCase().indexOf(searchTag.toString().toLowerCase()) > -1);
        console.log(filtr2)
        return filtr2;
    }


    useEffect(() => {
        api.get('/mountains').then(response => response.data)
            .then(data => {
                for (let num in data) {
                    fetch('http://localhost:8080/mountain/file/' + data[num].id)
                        .then(response => {
                            response.blob().then(blob => {
                                data[num].image = window.URL.createObjectURL(blob);
                            })
                        })}
                setMountains(data);
                changeStatus()
            })

    }, [status, mountains.length]);


    return (
        <div className="row">
            <div className="col-3">
                <Filter setSearchText={setSearchText} searchTag={searchTag} setSearchTag={setSearchTag}/>
            </div>
            <div className="col-9">
                {status ? (
                    <MountainList mountainAll={search(mountains2)} />
                ) :
                    <div className="spinner-border" role="status">

                    </div>
                }

            </div>


        </div>
    )

}
const Styles = styled.div`
    
`;