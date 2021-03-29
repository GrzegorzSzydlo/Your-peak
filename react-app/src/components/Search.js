import React, { Component } from 'react';
import styled from 'styled-components';

export default class Search extends Component {
    render() {
        return (
            <Styles>
                <div class="input-group">
                    <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
                        aria-describedby="search-addon" />
                    <button type="button" class="btn btn-outline-primary">search</button>
                </div>
            </Styles>

        )
    }
}

const Styles = styled.div`
    margin-left: 10%;

    .btn{
        margin-left:1rem;
    }
`;