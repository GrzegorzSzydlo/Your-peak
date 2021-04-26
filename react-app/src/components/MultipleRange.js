import React, {Component} from 'react';
import Slider from '@material-ui/core/Slider';
import styled from 'styled-components';


const Styles = styled.div`
  .form-control {
    width: 5rem;
    text-align: center;
  }
  


`;

class MultipleRange extends Component {

    value = [0,1000];
    handleChange = (event, newValue) => {
        this.setState(this.value = newValue);
    }

    inputChange = (event) => {
        const val = this.value;
        val[event.target.name] = event.target.value;
        this.setState(val);
    }
    render() {
        return (
            <Styles>
                <div className="d-flex justify-content-evenly align-items-center">
                    <input type="text" name="0" className="form-control" value={this.value[0]} onChange={this.inputChange}/>
                    <label className="fs-4">-</label>
                    <input type="text" name="1" className="form-control" value={this.value[1]} onChange={this.inputChange}/>
                </div>

                <Slider
                    value={this.value}
                    max = {1000}
                    onChange={this.handleChange}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                />
            </Styles>
        );
    }
}

export default MultipleRange;