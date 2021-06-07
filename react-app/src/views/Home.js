import React, {useEffect, useState} from 'react';
import Filter from '../components/Filter';
import styled from 'styled-components';
import MountainList from "../components/MountainList";

import axios from "axios";

const api = axios.create({
    baseURL: `http://localhost:8080/api`
})

export default function Home() {

    const [mountains, setMountains] = useState([]);
    const [status, setStatus] = useState(false);

    const [searchText, setSearchText] = useState("");
    const [searchTag, setSearchTag] = useState([]);
    const [searchHeight, setSearchHeight] = useState([0,100000])


    function search(mounts) {
        // const mountainKeys = mounts[0] && Object.keys(mounts[0])
        const mountainKeys = ["name", "range", "description", "height"];
        let filtr1 =  mounts.filter((mountain) =>
            mountainKeys.some((key) => mountain[key].toString().toLowerCase().indexOf(searchText.toLowerCase()) > -1));
        let filtr2 = filtr1.filter((mountain) =>
            //searchTag.some((key) => mountain["range"].toString().toLowerCase().indexOf(key.toString().toLowerCase()) >-1));
            mountain["range"].toString().toLowerCase().indexOf(searchTag.toString().toLowerCase()) > -1);
        let filtr3 = filtr2.filter((mountain) =>
        mountain["height"] >= searchHeight[0] && mountain["height"] <= searchHeight[1]);
        return filtr3;
    }


    useEffect(() => {
        api.get('/mountain/mountains').then(response => {
            Promise.all(response.data.map(num =>
            api.get('/mountain/image/' + num.id)
                .then(response => response.data)
                .then(data => {
                    return {num, data}
                }))
            ).then(value => {
                value.map(k => k.num.image = k.data);
                setMountains(response.data);
                setStatus(true);
            })
        })


    }, []);

    function changeDeleteStatus(index){
        delete mountains[index];
    }


    return (
        <div className="row">
            <div className="col-3">
                <Filter setSearchText={setSearchText} searchTag={searchTag} setSearchTag={setSearchTag} setSearchHeight={setSearchHeight}/>
            </div>
            <div className="col-9">
                {status ? (
                    <MountainList mountainAll={search(mountains)}  changeDeleteStatus={changeDeleteStatus}/>
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