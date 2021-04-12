import React from 'react';
import Filter from '../components/Filter';
import styled from 'styled-components';
import Rysy from '../img/Rysy.jpg';
import MountainList from "../components/MountainList";



export const Home = () => (
    <div className="row">
        <div className="col-3">
            <Filter />
        </div>
        <div className="col-9">
            <MountainList />
        </div>


    </div>
)

const Styles = styled.div`

    h2{
    padding-left: 2rem;
    width: 20rem;
    }
`;