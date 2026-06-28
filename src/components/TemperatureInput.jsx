// import React from 'react';
const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit',
}

export default function TemperatureInput({temperature, scale, onTemperatureChange}) {
    // state = {
    //     temperature: '',
    // }

    // onTemperatureChange = (e) => {
    //     this.setState({temperature: e.target.value})
    // }
    
    // render() {
    //     const { temperature } = this.state
    //     const { scale } = this.props
    return (
        <fieldset>
            <legend>Enter temperature in {scaleNames[scale]}:</legend>
            <input type="text" value={temperature} onChange={(e) => onTemperatureChange(e, scale)} />
        </fieldset>
    )
    // }
}