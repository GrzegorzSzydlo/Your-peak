import React, {useState} from 'react';
import {Title1, Title2} from './DiffrentTitle';
import RangesName from './RangesName';
import styled from 'styled-components';
import MultipleRange from "./MultipleRange";
import Search from "./Search";

export default function Filter({mountainAll ,changeMountainsList, setSearchText, searchTag, setSearchTag}) {





    return (
            <Styles>

                <div className="container">
                    <Title1 title="Filters"/>
                    <Search setSearchText={setSearchText}/>
                    <Title2 title="Mountain ranges"/>
                    <div className="form-check">
                        <input className="form-check-input"
                               type="checkbox"
                               value=""
                               id="flexCheckChecked"
                               checked={searchTag.includes("Tatry")}
                               onChange={(e)=>{
                                   const checked = searchTag.includes("Tatry");
                                   setSearchTag((prev) => checked ?
                                   prev.filter((sc) => sc !== "Tatry")
                                   : [...prev, "Tatry"]);
                               }}
                        />
                        <label className="form-check-label" htmlFor="flexCheckChecked">
                            Tatry
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
                        <label className="form-check-label" htmlFor="flexCheckChecked">
                            Bieszczady
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
                        <label className="form-check-label" htmlFor="flexCheckChecked">
                            Gorce
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
                        <label className="form-check-label" htmlFor="flexCheckChecked">
                            Karpaty
                        </label>
                    </div>

                    <Title2 title="Height"/>
                    <MultipleRange />
                </div>
            </Styles>
        )

}


const Styles = styled.div`
    
`;



