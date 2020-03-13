import React from 'react';
import Slider from './Slider.js';
import Toggle from './Toggle.js';
import './css/Settings.css';

// const equal = require('fast-deep-equal/es6/react');

export default class Settings extends React.Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        const setting = e.target.getAttribute('name');
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        this.props.updateSetting(setting, value)
    }
    render() {
        return (
            <div className='settings'>
                <Slider changeHandler={this.handleChange} value={this.props.settings.elementScale} title='Element Scale' id='elementScale' min='0' max='10' step='.1'></Slider>
                <Toggle value={this.props.settings.enableGrid} id='enableGrid' changeHandler={this.handleChange} title='Enable Grid'></Toggle>
            </div>
        )
    }
}