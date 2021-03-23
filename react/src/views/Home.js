import React from 'react';
import Filter from '../components/Filter';
import styled from 'styled-components';
import Rysy from '../img/Rysy.jpg';

export const Home = () => (
    <div class="row">
        <div class="col-2">
            <Filter />


        </div>
        <div class="col-10">
            <Styles>
                <div>
                    <img class="rysy" src={Rysy}  alt="Img" />
                    <h2>Rysy </h2>
                </div>
            </Styles>

        </div>

    </div>
)

const Styles = styled.div`
    .rysy{
    padding 1rem 2rem;
    weight: 20rem;
    height: 20rem;
    }
    h2{
    padding-left: 2rem;
    weight: 20rem;
    }
`;