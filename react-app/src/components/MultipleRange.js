import React, {Component, useState} from 'react';
import Slider from '@material-ui/core/Slider';
import styled from 'styled-components';


const Styles = styled.div`
  .form-control {
    width: 5rem;
    text-align: center;
  }
  
`;

export default function MultipleRange({setSearchHeight}) {

    const [value, setValue] = useState([0,1000])

    const handleChange = (event, newValue) => {
        setValue(newValue);
        setSearchHeight(newValue);
    }

    const inputChange = (event) => {
        const val = value;
        val[event.target.name] = event.target.value;
        setValue(val);
    }

        return (
            <Styles>
                <div className="d-flex justify-content-evenly align-items-center">
                    <input type="text" name="0" className="form-control" value={value[0]} onChange={inputChange}/>
                    <label className="fs-4">-</label>
                    <input type="text" name="1" className="form-control" value={value[1]} onChange={inputChange}/>
                </div>

                <Slider
                    value={value}
                    max = {1000}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                />
            </Styles>
        );
};
