import React, {Component} from 'react';
import {Title1, Title2} from './DiffrentTitle';
import RangesName from './RangesName';
import styled from 'styled-components';
import MultipleRange from "./MultipleRange";

export default class Filter extends Component {
    render() {
        return (
            <Styles>

                <div class="container">
                    <Title1 title="Filters"/>

                    <Title2 title="Mountain ranges"/>
                    <RangesName rangesName="Tatry"/>
                    <RangesName rangesName="Bieszczady"/>
                    <RangesName rangesName="Gorce"/>
                    <RangesName rangesName="Karpaty"/>
                    <Title2 title="Height"/>
                    <MultipleRange />
                </div>
            </Styles>
        )
    }
}


const Styles = styled.div`
    .form-control{
        width: 3rem;
        font-size: 14px;
    }
    .fs-4 {
        font-size: 30px;
    }
`;



