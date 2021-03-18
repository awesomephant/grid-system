import React from 'react';
import Slider from './Slider.js';
import Toggle from './Toggle.js';
import Dropdown from './Dropdown.js';
import LockingSliderGroup from './LockingSliderGroup.js';
import TextInput from "./TextInput.js"
import './css/Settings.scss';

// const equal = require('fast-deep-equal/es6/react');

export default class Settings extends React.Component {
    render() {
        return (
            <div className='settings'>
                <TextInput updateSetting={this.props.updateSetting} value={this.props.settings.text} title='Text' id='text'></TextInput>

                <Dropdown updateSetting={this.props.updateSetting} options={['circle', 'rect']} value={this.props.settings.elementShape} id='elementShape' title='Element Shape'></Dropdown>

                <Slider updateSetting={this.props.updateSetting} value={this.props.settings.elementScaleX} title='Element Scale X' id='elementScaleX' min='0.01' max='10' step='.1'></Slider>

                <Slider updateSetting={this.props.updateSetting} value={this.props.settings.elementScaleY} title='Element Scale Y' id='elementScaleY' min='0.01' max='10' step='.1'></Slider>

                <Slider updateSetting={this.props.updateSetting} value={this.props.settings.elementRotation} title='Element Rotation' id='elementRotation' min='0' max='360' step='.1'></Slider>

                <Slider updateSetting={this.props.updateSetting} value={this.props.settings.gridSkew} title='Grid Skew' id='gridSkew' min='-350' max='350' step='.001'></Slider>

                <Slider updateSetting={this.props.updateSetting} value={this.props.settings.cellHeight} title='Cell Height' id='cellHeight' min='5' max='150' step='.001'></Slider>
                <Slider updateSetting={this.props.updateSetting} value={this.props.settings.cellWidth} title='Cell Width' id='cellWidth' min='5' max='150' step='.001'></Slider>
                <Slider updateSetting={this.props.updateSetting} value={this.props.settings.spacing} title='Spacing' id='spacing' min='-150' max='150' step='.001'></Slider>
            </div>
        )
    }
}

