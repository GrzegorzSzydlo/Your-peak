import React, {Component} from 'react';
import {Title1, Title2} from './DiffrentTitle';
import RangesName from './RangesName';
import styled from 'styled-components';

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
                    <div>
                        <div className="d-flex justify-content-evenly align-items-center">
                            <input type="text" className="form-control" placeholder="0"/>
                            <label className="fs-4">-</label>
                            <input type="text" className="form-control" placeholder="100"/>
                        </div>
                        <div className="d-flex justify-content-center">
                            <input type="range" data-min="0" data-max="100"
                                   data-step="1" data-value="50"/>
                        </div>
                    </div>
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



