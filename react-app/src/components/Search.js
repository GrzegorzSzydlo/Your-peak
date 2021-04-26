import React from 'react';
import styled from 'styled-components';

export default function  Search({ setSearchText }) {



        return (
            <Styles>
                <div className="col-md-5 col-lg-12">
                    <div className="input-group">
                        <input type="search"
                               className="form-control rounded"
                               placeholder="Search"
                               aria-label="Search"
                               aria-describedby="search-addon"
                               onChange={(e) => {setSearchText(e.target.value);console.log(e.target.value)}}
                        />
                        {/*<button type="button" className="btn btn-outline-primary">search</button>*/}
                    </div>
                </div>
            </Styles>
        )
}

const Styles = styled.div`
    
`;