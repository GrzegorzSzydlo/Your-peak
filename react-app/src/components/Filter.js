import React, {useEffect, useState} from 'react';
import {Title1, Title2} from './DiffrentTitle';
import styled from 'styled-components';
import MultipleRange from "./MultipleRange";
import Search from "./Search";


import axios from "axios";

const api = axios.create({
    baseURL: `http://localhost:8080/api`
})


export default function Filter({setSearchText, searchTag, setSearchTag, setSearchHeight}) {


    const [ranges, setRanges] = useState([])

    useEffect(() => {
        api.get("/mountain/mountainRange").then(response => response.data).then(data => {
            setRanges(data);
        })
    }, [])



    return (
            <Styles>

                <div className="container">
                    <Title1 title="Filters"/>
                    <Search setSearchText={setSearchText}/>
                    <Title2 title="Mountain ranges"/>

                    {ranges.map((range) =>
                    <div className="form-check" key={range}>
                        <input className="form-check-input"
                               type="checkbox"
                               value=""
                               id="flexCheckChecked"
                               checked={searchTag.includes(range)}
                               onChange={(e)=>{
                                   const checked = searchTag.includes(range);
                                   setSearchTag((prev) => checked ?
                                       prev.filter((sc) => sc !== range)
                                       : [...prev, range]);
                               }}
                        />
                        <label className="form-check-label" htmlFor="flexCheckChecked">
                            {range}
                        </label>
                    </div>
                    )}

                    <Title2 title="Height"/>
                    <MultipleRange setSearchHeight={setSearchHeight} />
                </div>
            </Styles>
        )

}


const Styles = styled.div`
    
`;



