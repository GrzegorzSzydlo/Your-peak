import React, { Component } from 'react'

export default class RangesName extends Component {
    
    render() {
        const rangName = this.props.rangesName;

        return (
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                <label class="form-check-label" for="flexCheckChecked">
                    {rangName}
                </label>
            </div>
        )
    }
}
