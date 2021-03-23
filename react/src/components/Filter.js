import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Title1, Title2 } from './DiffrentTitle';
import RangesName from './RangesName'

export default class Filter extends Component {
    render() {
        return (
            <Container>
                <Title1 title="Filters" />

                <Title2 title="Mountain ranges" />
                    <RangesName rangesName="Tatry"/>
                    <RangesName rangesName="Bieszczady"/>
                    <RangesName rangesName="Gorce"/>
                    <RangesName rangesName="Karpaty"/>
                <Title2 title="Height" />
                <div>
                    <form class="multi-range-field my-5 pb-5">
                        <input id="multi1" class="multi-range" type="range" />
                    </form>
                </div>
                    



            </Container>

        )
    }
}
